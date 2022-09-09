import React from 'react'
import { Button } from 'components'
import PlusCircle from 'assets/icons/plus-circle.svg'
import CheckCircle from 'assets/icons/check-circle.svg'
import XCircle from 'assets/icons/x-circle.svg'
import More from 'assets/icons/more-horizontal.svg'

export default function Card() {
  return (
    <div className="card primary-outline p-3">
        <div className="card-body p-0">
            <h5 className="card-title mb-3">
                <span className="badge primary-outline">Group Task 1</span>
            </h5>
            <h6 className="card-subtitle mb-2">January - March</h6>
            <div className="card-item">
                Re-designed the zero-g doggie bags. No more spills!
                <hr />
                <div className="detail-wrapper">
                    <div className="progress-wrapper">
                        <div className="progress">
                            <div className="progress-bar failed" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <img src={XCircle} alt='icon'/>
                    </div>
                    <img src={More} alt='icon'/>
                </div>
            </div>
            <div className="card-item">
                Bundle interplanetary analytics for improved transmission
                <hr />
                <></>
                <div className="detail-wrapper">
                    <div className="progress-wrapper">
                        <div className="progress">
                            <div className="progress-bar complete" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <img src={CheckCircle} alt='icon'/>
                    </div>
                    <img src={More} alt='icon'/>
                </div>
            </div>
            <div className="card-item">
                Data Migration: Performance & Culture End Game
                <hr />
                <div className="detail-wrapper">
                    <div className="progress-wrapper">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>30%</span>
                    </div>
                    <img src={More} alt='icon'/>
                </div>
            </div>
            <Button isPlain icon={PlusCircle}>New Task</Button>
        </div>
    </div>
  )
}
