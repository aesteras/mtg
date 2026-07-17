- Performance
  - Create a "Performance over time" section as the primary visualization of the page.
  - Display a line chart with the X axis representing play session date and the Y axis representing win rate for that session (wins / total games in the session).
  - Plot one point per recorded session.
  - Add a second line representing the rolling average of the last 5 sessions to smooth short-term fluctuations.
  - Visually distinguish the raw session values from the rolling average (different color, opacity or line style).
  - If there are fewer than 5 sessions, hide the rolling average and display only the session win rate line.
  - Display an empty or informational state when there is insufficient data to provide meaningful trends (for example fewer than 2 sessions).
  - Ensure the chart communicates progression over time rather than cumulative performance.
  - Tooltip should display session date, wins, losses, total games and win percentage for the selected session.

- Activity (Done)

- Insights
  - Create an "Insights" section containing derived metrics rather than raw statistics.
  - Avoid repeating metrics already shown in the deck grid (total wins, total losses, total games, overall win percentage).
  - Include "Current trend".
    - Compare the rolling average win rate of the last 5 sessions against the previous 5 sessions.
    - Display both a qualitative category (Improving, Stable, Declining) and the numerical difference.
    - Define thresholds for the categories so small fluctuations are treated as Stable.
    - If there are fewer than 10 sessions, display an empty or unavailable state explaining that more play history is required.

  - Include "Best streak".
    - Compute the maximum number of consecutive wins achieved by the deck.
    - Display the streak length as the record.

  - Include "Worst streak".
    - Compute the maximum number of consecutive losses achieved by the deck.
    - Display the streak length as the record.

  - Include an "Activity calendar".
    - Display a GitHub-style contribution calendar.
    - Each recorded play session should contribute intensity based on the number of games played that day.
    - Empty days should remain visible.
    - Allow users to quickly identify periods of heavy use and inactivity.
    - Tooltip should display date and games played.

  - Include a "Milestones" timeline.
    - Display milestones chronologically.
    - Include milestones for total games played at multiples of 10 (10, 20, 30, ...).
    - Include milestones for total victories at multiples of 10 (10, 20, 30, ...).
    - Include milestones for winning streaks at multiples of 5 (5, 10, 15, ... consecutive wins).
    - Display the achievement date for every milestone.
    - Multiple milestone types may appear on the same date.
    - Do not include milestones based on win percentage.
    - Do not implement pagination, collapsing or "show more" behaviour for now.
    - Generate all milestones from historical session data rather than storing them separately.

- Session history
  - Create a "Session history" section displayed as a table.
  - Display one row per recorded play session.
  - Include the following columns:
    - Date
    - Wins
    - Losses
    - Total games
    - Win rate

  - Sort sessions chronologically, most recent first.
  - Ensure the table complements the charts by providing exact values.
  - Future enhancements such as filtering, sorting and pagination are out of scope for the initial implementation.
