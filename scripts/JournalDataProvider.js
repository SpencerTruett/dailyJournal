/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
  {
    date: "11/12/2019",
    concept: "Frontend Capstone Presentation: C35",
    entry: "We watched some presentations from Cohort 35. They were interesting. Seems doable.",
    mood: "Pretty Good"
  },
  {
    date: "11/13/2019",
    concept: "HTML",
    entry: "We discussed the basics of HTML and installed some programs.",
    mood: "Meh"
  },
  {
    date: "11/14/2019",
    concept: "HTML & CSS",
    entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Pretty Good"
  },
  {
    date: "11/15/2019",
    concept: "More HTML & CSS: Project",
    entry: "We worked on our Journals and and had 'lab time'. I sort of ran out of things to do, so I moved on to part two: this part that I'm literally typing right now. Meta.",
    mood: "Just Ok"
  }
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}