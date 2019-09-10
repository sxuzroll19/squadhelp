import React from 'react';
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

import style from './StatusOfContest.module.sass'
import {URL} from "../../../../api/baseURL";

function StatusOfContest(props) {
    return (
        <div className={style.statusOfContest}>
            <div className={style.container}>
                <div className={style.icon}>
                    <i className="fas fa-lightbulb" />
                </div>
                <div className={style.contestInformation}>
                    <h3 className={style.count}>0</h3>
                    <span className={style.text}>Launched Contests</span>
                    <Link to={URL.CONTEST_TYPE} className={style.link}>
                        Launch Contest
                    </Link>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    sideMenuIsOpen: state.dashboardReducer.sideMenuIsOpen,
});
export default connect(mapStateToProps)(StatusOfContest);
