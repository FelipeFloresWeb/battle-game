import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlayerCanAttack } from '../../store/reducers/player'
import { selectPlayerCanAttack } from '../../store/selectors/player'
import * as S from './styles'

export const Cursor = () => {
	const dispatch = useDispatch()

	const cursor = `images/swords/1.webp`

	const cursorRef = useRef<any>(null)
	const attackRef = useRef<any>(null)
	const [isAttacking, setIsAttacking] = useState(false)

	const canAttack = useSelector((state: any) => selectPlayerCanAttack(state))

	const attack = useCallback(
		(e: any) => {
			dispatch(setPlayerCanAttack(false))

			if (canAttack && cursor !== 'images/swords/0.webp') {
				const posX = e.pageX - 50
				const posY = e.pageY + 35
				cursorRef?.current?.setAttribute('style', 'top: ' + posY + 'px; left: ' + posX + 'px;')
				setIsAttacking(true)
			}

			setTimeout(() => {
				const posY = e.pageY - 6
				const posX = e.pageX - 50

				if (cursorRef?.current == null) return

				cursorRef?.current?.setAttribute('style', 'top: ' + posY + 'px; left: ' + posX + 'px;')
				setIsAttacking(false)
			}, 200)

			setTimeout(() => {
				dispatch(setPlayerCanAttack(true))
			}, 2000)
		},
		[canAttack, cursor, dispatch]
	)

	useEffect(() => {
		if (!canAttack) {
			document.removeEventListener('click', attack)
			return
		}
		document.addEventListener('click', e => attack(e), { once: true })
	}, [attack, canAttack])

	useEffect(() => {
		document.addEventListener('mousemove', e => {
			const posY = e.pageY - 6
			const posX = e.pageX - 50

			const posXattack = posX + 50

			if (cursorRef?.current == null) return

			cursorRef?.current?.setAttribute('style', 'top: ' + posY + 'px; left: ' + posX + 'px;')
			if (isAttacking) {
				attackRef?.current?.setAttribute('style', 'top: ' + posY + 'px; left: ' + posXattack + 'px;')
			}
		}),
			{ once: true }
	}, [isAttacking])

	const cursorContainerProps = {
		cursorIcon: cursor,
		ref: cursorRef,
		isAttacking: cursor !== 'images/swords/0.webp' ? isAttacking.toString() : 'false',
	}

	const attackAreaProps = {
		isAttacking: cursor !== 'images/swords/0.webp' ? isAttacking.toString() : 'false',
		ref: attackRef,
	}

	return (
		<Fragment>
			<S.CursorContainer {...cursorContainerProps} />
			<S.AttackArea {...attackAreaProps} />
		</Fragment>
	)
}
