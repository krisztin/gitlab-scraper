# GitLab Jobsite scraper

Weekly cron job looking for Business Systems Analyst(BSA) job openings.

:link: [Linked to issue #7: No email alerts...](https://gitlab.com/the-nagy-branch/merge-request/issues/7)

## Problem

- No current BSA openings
- GitLab's jobsite has no email alert/sign up. This means regular, manual check ups
- Need to be able to apply amongst the firsts

## The solution

Create a simple scraper node script with `Cheerio` looking for the desired positions and then sending an email with `Nodemailer` to the candidate. Set it up to run every week with `Nodecron`.

**MVP**

- [x] Scrape the site for BSA openings
- [x] If there is a match send an alert email
- [x] Cron job running every week

**TBA**

- [ ] Email to send the link(s) to the open position(s)
- [x] Hide login details
- [ ] Switch from Gmail to own email
