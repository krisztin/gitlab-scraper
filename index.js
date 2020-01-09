import cron from 'node-cron';
import { searchOpenings, getHTML } from './lib/scraper'
import { sendEmail, sendStatus } from './lib/email'

const gitlabURL = 'https://boards.greenhouse.io/gitlab'

export async function runCron() {
  const html = await getHTML(`${gitlabURL}`)
  const openings = await searchOpenings(html)

  if (openings != undefined) { 
    sendEmail()
  } else {
    sendStatus()
  } 
}

cron.schedule(`0 9 * * MON`, () => {
  runCron();
});