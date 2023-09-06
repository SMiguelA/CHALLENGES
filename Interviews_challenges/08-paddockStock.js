const paddockType = [
  { id:1, name:'PALTOS' },
  { id:2, name:'AVELLANOS' },
  { id:3, name:'CEREZAS' },
  { id:4, name:'NOGALES' },
]

const paddocks = [
  { paddockManagerId: 6, farmId: 1, paddonckTypeId: 1, harvestYear: 2019, area: 1200 },
  { paddockManagerId: 1, farmId: 3, paddonckTypeId: 4, harvestYear: 2019, area: 500 },
  { paddockManagerId: 5, farmId: 3, paddonckTypeId: 2, harvestYear: 2020, area: 20000 },
  { paddockManagerId: 2, farmId: 2, paddonckTypeId: 3, harvestYear: 2021, area: 8401 },
  { paddockManagerId: 6, farmId: 1, paddonckTypeId: 1, harvestYear: 2019, area: 1200 },
  { paddockManagerId: 1, farmId: 3, paddonckTypeId: 4, harvestYear: 2019, area: 500 },
  { paddockManagerId: 5, farmId: 3, paddonckTypeId: 2, harvestYear: 2020, area: 20000 },
  { paddockManagerId: 2, farmId: 2, paddonckTypeId: 3, harvestYear: 2021, area: 8401 },
  { paddockManagerId: 6, farmId: 1, paddonckTypeId: 1, harvestYear: 2019, area: 1200 },
  { paddockManagerId: 1, farmId: 3, paddonckTypeId: 4, harvestYear: 2019, area: 500 },
  { paddockManagerId: 5, farmId: 3, paddonckTypeId: 2, harvestYear: 2020, area: 20000 },
  { paddockManagerId: 2, farmId: 2, paddonckTypeId: 3, harvestYear: 2021, area: 8401 },
  { paddockManagerId: 6, farmId: 1, paddonckTypeId: 1, harvestYear: 2019, area: 1200 },
  { paddockManagerId: 1, farmId: 3, paddonckTypeId: 4, harvestYear: 2019, area: 500 },
  { paddockManagerId: 5, farmId: 3, paddonckTypeId: 2, harvestYear: 2020, area: 20000 },
  { paddockManagerId: 2, farmId: 2, paddonckTypeId: 3, harvestYear: 2021, area: 8401 },
]

const areaOfPadocks = {}

// recorrer los padocks para hacer la suma

paddocks.forEach((paddock) => {
  const {paddonckTypeId, area} = paddock;
  // areaOfPadocks[paddonckTypeId] = areaOfPadocks[paddonckTypeId] ?? 0   tambien se puede de esta forma
  areaOfPadocks[paddonckTypeId] ??= 0
  areaOfPadocks[paddonckTypeId] += area
})

const newArr = paddockType.map((paddock) => ({
  ...paddock,
  totalSum: areaOfPadocks[paddock.id]
})).sort((a,b) => b.totalSum - a.totalSum)

console.log(newArr);