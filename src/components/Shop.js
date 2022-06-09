import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "../state/index"

function Shop() {
  const dispatch=useDispatch()
  const {depositMoney,WithdrawMoney}=bindActionCreators(actionCreators,dispatch)

  dispatch(actionCreators.depositMoney(65))
  return (
    <div className="container">
      <h1>Add/Remove Balance</h1>
        <button className="btn btn-success" onClick={()=>depositMoney(100)}>+</button>
         update balance
        <button className="btn btn-success" onClick={()=>WithdrawMoney(100)}>-</button>
    </div>
  )
}

export default Shop