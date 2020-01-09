# GitLab Jobsite scraper

Weekly cron job looking for Business Systems Analyst(BSA) job openings.

## Problem

- No current BSA openings
- GitLab's jobsite has no email alert/sign up. This means regular, manual check ups
- Need to be able to apply amongst the firsts

## The solution

Create a simple scraper looking for the desired positions.

**MVP**

- Scrape the site for BA openings
- If there is a match send an alert email
- Cron job running every week

**TBA**

- Email to send the link(s) to the open position(s)
- Hide login details
- Switch from Gmail to own email
