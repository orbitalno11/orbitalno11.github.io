import React, { Fragment } from 'react'

export default ({ skillTitle, imageList, titleList }) => (
    <Fragment>
        <h5><strong>{skillTitle}</strong></h5>
        <ul>
            {
                titleList.map((item, index) => (
                    <li key={index}>
                        {item}
                        <img className="pro-skill-icon" src={require(imageList[index])} />
                    </li>
                ))
            }
        </ul>
    </Fragment>
)