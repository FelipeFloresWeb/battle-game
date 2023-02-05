import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
	selectCenario,
	selectLoadingScene,
	selectShowMonsterLoot,
	selectStage,
	selectStartMonsterAttack,
} from '../../store/selectors/actions'

const useActions = () => {
	const startMonsterAttack = useSelector((state: RootState) => selectStartMonsterAttack(state))
	const showMonsterLoot = useSelector((state: RootState) => selectShowMonsterLoot(state))
	const loadingScene = useSelector((state: RootState) => selectLoadingScene(state))
	const scene = useSelector((state: RootState) => selectCenario(state))
	const stage = useSelector((state: RootState) => selectStage(state))

	return {
		startMonsterAttack,
		showMonsterLoot,
		loadingScene,
		scene,
		stage,
	}
}

export default useActions
