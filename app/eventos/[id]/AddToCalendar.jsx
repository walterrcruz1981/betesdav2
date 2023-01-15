'use client'
import React, { useEffect } from "react"
import { atcb_init } from "add-to-calendar-button"
import 'add-to-calendar-button/assets/css/atcb.css'

export default function AddToCalender({ content }) {
    useEffect(() => {
        atcb_init()
    }, [])
    return (
        <div className="atcb">
            {'{'}
            "name":"{content.title}",
            "description": "{content.description}",
            "startDate":"{content.date}",
            "startTime":"{content.startTime}",
            "endTime":"{content.endTime}",
            "location":"{content.location}",
            "label":"Agregar al calendario",
            "options":[
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "Outlook.com",
            "Yahoo"
            ],
            "timeZone":"currentBrowser",
            "iCalFileName":"Reminder-Event"
            {'}'}
        </div>
    )
}