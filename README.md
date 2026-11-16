# The Why: Staff CPD

One page (`index.html`). Staff type their name and team, drill missing-word flashcards one week, take a 10 question quiz built from the same words the next, and earn XP. Teams are ranked in a public league; each person sees only their own results.

## Put it on GitHub Pages
1. On GitHub, create a new repository called `CPD`. Public is simplest for Pages.
2. Upload `index.html` (drag it into the repository page, then Commit).
3. Settings > Pages > Build and deployment > Deploy from a branch > `main` and `/ (root)` > Save.
4. After a minute the site is at `https://<your-username>.github.io/CPD/`.

## Test it before staff see it
- `...?preview=1` opens everything and keeps scores on your own device.
- `...?date=2026-11-27` pretends it is that day: drill week. `2026-12-04` is quiz week, `2026-12-14` is after the quiz closes. Scores stay on your device.
- Without either, the real dates apply. Until `endpoint` is set the site runs in demo mode with sample colleagues.

## Units and dates
The Behaviour and routines chapter is built as seven units, one per fortnight. Flashcards open on the drill date and stay open. The quiz counts for the league from its date for 7 days plus 2 days' grace (`quizOpenDays` and `graceDays` in `CONFIG`).

| Unit | Cards | Flashcards | Quiz |
|---|---|---|---|
| Student conduct | 9 | Thu 26 Nov 2026 | Thu 3 Dec 2026 |
| Culture, part 1 | 7 | Thu 10 Dec | Thu 17 Dec |
| Culture, part 2 | 7 | Thu 7 Jan 2027 | Thu 14 Jan |
| Student interaction and movement | 10 | Thu 21 Jan | Thu 28 Jan |
| Sanctions | 10 | Thu 4 Feb | Thu 11 Feb |
| Removal from lessons | 7 | Thu 25 Feb | Thu 4 Mar |
| Suspensions and mobile phones | 8 | Thu 11 Mar | Thu 18 Mar |

Change a date by editing `drill:` and `quiz:` in that unit inside `index.html`.

## Shared league (Google Sheet and Apps Script)
Check with your data protection lead first: staff names and scores sit in a Google account.
1. Create a Google Sheet, rename the first tab `Scores`, and type `name, team, quizId, score, max, date` in row 1 (one per column).
2. Extensions > Apps Script. Paste the contents of `apps-script.gs`.
3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone. Copy the web app URL.
4. In `index.html`, set `endpoint:'<that URL>'` in `CONFIG`, then commit.

## How it scores
- Flashcards: a typed word is right if it matches the guide word, ignoring capitals, punctuation and a one letter slip on longer words. Hint shows first letters. Show me reveals the words and sends the card to the back of the queue.
- XP: 2 per correct word (once per word per day), 10 the first time a whole card is right without Show me, and 10 per correct quiz answer.
- League: 10 points per correct answer. Only a person's first attempt at each quiz counts. A team's score is the average points of the people who have played.

## Things to know
- There is no login. Staff type their own name, so someone could use a colleague's name. This suits low stakes CPD but is not secure.
- Answers are in the page, so a technically confident member of staff could find them.
- The endpoint address is visible in the page, so anyone who finds it could read or add scores.

## Adding the next unit
Each unit in `UNITS` has `cards` (with the guide page and subsection) (the "we" statement and the "so that" statements, with missing words in `{{double braces}}`) and `quizQs` (which blank each quiz question uses and three wrong options). Ask Claude to generate the next unit from the guide and paste it in.
