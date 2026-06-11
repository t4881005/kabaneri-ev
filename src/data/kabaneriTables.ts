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

export const normalTable: KabaneriRow[] = [
  { game: 1, equal: -936, fiveSixReplay: -836, fiveSixCash: -2228, fiveSixLimit500: -1521 },
  { game: 50, equal: -368, fiveSixReplay: -329, fiveSixCash: -1664, fiveSixLimit500: -967 },
  { game: 100, equal: 82, fiveSixReplay: 73, fiveSixCash: -1217, fiveSixLimit500: -528 },
  { game: 150, equal: -386, fiveSixReplay: -345, fiveSixCash: -1691, fiveSixLimit500: -991 },
  { game: 200, equal: 148, fiveSixReplay: 133, fiveSixCash: -1160, fiveSixLimit500: -470 },
  { game: 250, equal: 691, fiveSixReplay: 617, fiveSixCash: -621, fiveSixLimit500: 58 },
  { game: 300, equal: -148, fiveSixReplay: -132, fiveSixCash: -1465, fiveSixLimit500: -768 },
  { game: 350, equal: -456, fiveSixReplay: -407, fiveSixCash: -1779, fiveSixLimit500: -1075 },
  { game: 400, equal: 89, fiveSixReplay: 79, fiveSixCash: -1236, fiveSixLimit500: -542 },
  { game: 450, equal: 749, fiveSixReplay: 668, fiveSixCash: -581, fiveSixLimit500: 100 },
  { game: 500, equal: 1255, fiveSixReplay: 1121, fiveSixCash: -79, fiveSixLimit500: 592 },
  { game: 550, equal: 1929, fiveSixReplay: 1722, fiveSixCash: 592, fiveSixLimit500: 1249 },
  { game: 600, equal: 2856, fiveSixReplay: 2550, fiveSixCash: 1518, fiveSixLimit500: 2152 },
  { game: 650, equal: 3760, fiveSixReplay: 3357, fiveSixCash: 2419, fiveSixLimit500: 3029 },
  { game: 700, equal: 4474, fiveSixReplay: 3994, fiveSixCash: 3128, fiveSixLimit500: 3719 },
  { game: 750, equal: 5353, fiveSixReplay: 4779, fiveSixCash: 4005, fiveSixLimit500: 4569 },
  { game: 800, equal: 6465, fiveSixReplay: 5772, fiveSixCash: 5114, fiveSixLimit500: 5641 },
  { game: 850, equal: 7628, fiveSixReplay: 6811, fiveSixCash: 6277, fiveSixLimit500: 6762 },
]

export const resetTable: KabaneriRow[] = [
  { game: 1, equal: 817, fiveSixReplay: 730, fiveSixCash: -440, fiveSixLimit500: 225 },
  { game: 50, equal: 1934, fiveSixReplay: 1727, fiveSixCash: 680, fiveSixLimit500: 1317 },
  { game: 100, equal: 2931, fiveSixReplay: 2617, fiveSixCash: 1680, fiveSixLimit500: 2290 },
  { game: 150, equal: 3383, fiveSixReplay: 3021, fiveSixCash: 2129, fiveSixLimit500: 2727 },
  { game: 200, equal: 4419, fiveSixReplay: 3945, fiveSixCash: 3167, fiveSixLimit500: 3732 },
  { game: 250, equal: 5340, fiveSixReplay: 4768, fiveSixCash: 4084, fiveSixLimit500: 4619 },
  { game: 300, equal: 4811, fiveSixReplay: 4296, fiveSixCash: 3551, fiveSixLimit500: 4105 },
  { game: 350, equal: 5518, fiveSixReplay: 4927, fiveSixCash: 4251, fiveSixLimit500: 4783 },
  { game: 400, equal: 6528, fiveSixReplay: 5829, fiveSixCash: 5263, fiveSixLimit500: 5759 },
  { game: 450, equal: 7600, fiveSixReplay: 6786, fiveSixCash: 6327, fiveSixLimit500: 6786 },
  { game: 500, equal: 8428, fiveSixReplay: 7525, fiveSixCash: 7159, fiveSixLimit500: 7525 },
  { game: 550, equal: 9635, fiveSixReplay: 8603, fiveSixCash: 8372, fiveSixLimit500: 8603 },
]

export const throughTable: KabaneriRow[] = [
  { game: 1, equal: 419, fiveSixReplay: 374, fiveSixCash: -888, fiveSixLimit500: -204 },
  { game: 50, equal: 1235, fiveSixReplay: 1103, fiveSixCash: -73, fiveSixLimit500: 593 },
  { game: 100, equal: 2111, fiveSixReplay: 1885, fiveSixCash: 804, fiveSixLimit500: 1449 },
  { game: 150, equal: 2727, fiveSixReplay: 2435, fiveSixCash: 1419, fiveSixLimit500: 2049 },
  { game: 200, equal: 3717, fiveSixReplay: 3318, fiveSixCash: 2405, fiveSixLimit500: 3008 },
  { game: 250, equal: 4643, fiveSixReplay: 4146, fiveSixCash: 3333, fiveSixLimit500: 3909 },
  { game: 300, equal: 5171, fiveSixReplay: 4617, fiveSixCash: 3867, fiveSixLimit500: 4423 },
  { game: 350, equal: 5960, fiveSixReplay: 5322, fiveSixCash: 4658, fiveSixLimit500: 5187 },
  { game: 400, equal: 6980, fiveSixReplay: 6232, fiveSixCash: 5679, fiveSixLimit500: 6171 },
  { game: 450, equal: 7966, fiveSixReplay: 7113, fiveSixCash: 6673, fiveSixLimit500: 7113 },
  { game: 500, equal: 8800, fiveSixReplay: 7857, fiveSixCash: 7510, fiveSixLimit500: 7857 },
  { game: 550, equal: 10021, fiveSixReplay: 8947, fiveSixCash: 8735, fiveSixLimit500: 8947 },
]

export const upperTable: KabaneriRow[] = [
  { game: 1, equal: 794, fiveSixReplay: 709, fiveSixCash: -601, fiveSixLimit500: 92 },
  { game: 50, equal: 1823, fiveSixReplay: 1628, fiveSixCash: 429, fiveSixLimit500: 1100 },
  { game: 100, equal: 2856, fiveSixReplay: 2550, fiveSixCash: 1461, fiveSixLimit500: 2109 },
  { game: 150, equal: 3725, fiveSixReplay: 3326, fiveSixCash: 2326, fiveSixLimit500: 2952 },
  { game: 200, equal: 4714, fiveSixReplay: 4209, fiveSixCash: 3317, fiveSixLimit500: 3915 },
  { game: 250, equal: 5672, fiveSixReplay: 5064, fiveSixCash: 4273, fiveSixLimit500: 4842 },
  { game: 300, equal: 6197, fiveSixReplay: 5533, fiveSixCash: 4798, fiveSixLimit500: 5349 },
  { game: 350, equal: 7000, fiveSixReplay: 6250, fiveSixCash: 5597, fiveSixLimit500: 6122 },
  { game: 400, equal: 8064, fiveSixReplay: 7200, fiveSixCash: 6657, fiveSixLimit500: 7145 },
  { game: 450, equal: 9132, fiveSixReplay: 8153, fiveSixCash: 7726, fiveSixLimit500: 8153 },
  { game: 500, equal: 9868, fiveSixReplay: 8811, fiveSixCash: 8477, fiveSixLimit500: 8811 },
  { game: 550, equal: 11109, fiveSixReplay: 9919, fiveSixCash: 9723, fiveSixLimit500: 9919 },
]