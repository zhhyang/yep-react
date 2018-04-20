import React from 'react'
import {render} from 'react-dom'
import {Switch} from "@jdcfe/lrc-m"

import './base.scss'
render(
    <div>
        <Switch currentStatus={true}/>
    </div>, document.getElementById('app')
);
