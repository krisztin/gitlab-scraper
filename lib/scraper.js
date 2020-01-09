import axios from 'axios';
import cheerio from 'cheerio';

export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function searchOpenings(html) {
  const $ = cheerio.load(html)
  const baOpenings = $('.opening a:contains("Business"):contains("Analyst")').text()

  if (baOpenings != '') {return baOpenings}
}