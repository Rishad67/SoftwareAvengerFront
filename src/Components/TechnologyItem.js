import React from 'react'
import { Card } from 'react-bootstrap';

export default function TechnologyItem(props) {
    return (
        <div className="card-holder col-4 col-sm-3 col-md-2 col-xl-1">
            <Card style={{zIndex: 10 }}>
                <Card.Img className="mb-2 p-2" src={props.item.image} />
                <p className="tech-card-label">{props.item.label}</p>
            </Card>
        </div>
    )
}
