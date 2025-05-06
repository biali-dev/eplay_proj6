import ProducstList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportsGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProducstList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProducstList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProducstList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProducstList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProducstList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
