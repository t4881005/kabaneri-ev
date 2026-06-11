export type Exchange =
  | 'equal'
  | 'fiveSixReplay'
  | 'fiveSixCash'
  | 'fiveSixLimit500'

export type KabaneriRow = {
  game: number
  equal: number
  fiveSixReplay: number
  fiveSixCash: number
  fiveSixLimit500: number
}