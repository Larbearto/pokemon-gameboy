export type Pokemon = {
  id: string
  name: string
  types: [{ type: { name: string } }]
  weight: number
  height: number
  stats: [{ base_stat: number; stat: { name: string } }]
}
