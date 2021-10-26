import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
                image = "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s176-c-k-c0x00ffffff-no-rj"
                channel = "freeCodeCamp.org"
                verified
                subs="4.44M"
                noOfVideos={382}
                description="Learn to code for free"
            />

            <hr/>
            <VideoRow
                views="22K"
                subs="4.44M"
                description="Let's build our first Android app - a tip calculator! This video assumes NO prior experience with Android, and by the end you'll have something an app you could publish. We'll cover how to create the user interface with XML, and how to code the logic using the Kotlin programming language. These are the fundamental building blocks of any modern Android app."
                timestamp="14 hours ago"
                channel="freeCodeCamp.org"
                title="Android App Development Tutorial for Beginners-Your first app"
                image="https://i.ytimg.com/an_webp/FjrKMcnKahY/mqdefault_6s.webp?du=3000&sqp=CO7z3YsG&rs=AOn4CLD8u19NVdf9gGUyteRrqN3jBetXRQ"
            />
            <VideoRow
                views="22K"
                subs="4.44M"
                description="Let's build our first Android app - a tip calculator! This video assumes NO prior experience with Android, and by the end you'll have something an app you could publish. We'll cover how to create the user interface with XML, and how to code the logic using the Kotlin programming language. These are the fundamental building blocks of any modern Android app."
                timestamp="14 hours ago"
                channel="freeCodeCamp.org"
                title="Android App Development Tutorial for Beginners-Your first app"
                image="https://i.ytimg.com/an_webp/FjrKMcnKahY/mqdefault_6s.webp?du=3000&sqp=CO7z3YsG&rs=AOn4CLD8u19NVdf9gGUyteRrqN3jBetXRQ"
            /><VideoRow
                views="22K"
                subs="4.44M"
                description="Let's build our first Android app - a tip calculator! This video assumes NO prior experience with Android, and by the end you'll have something an app you could publish. We'll cover how to create the user interface with XML, and how to code the logic using the Kotlin programming language. These are the fundamental building blocks of any modern Android app."
                timestamp="14 hours ago"
                channel="freeCodeCamp.org"
                title="Android App Development Tutorial for Beginners-Your first app"
                image="https://i.ytimg.com/an_webp/FjrKMcnKahY/mqdefault_6s.webp?du=3000&sqp=CO7z3YsG&rs=AOn4CLD8u19NVdf9gGUyteRrqN3jBetXRQ"
            /><VideoRow
                views="22K"
                subs="4.44M"
                description="Let's build our first Android app - a tip calculator! This video assumes NO prior experience with Android, and by the end you'll have something an app you could publish. We'll cover how to create the user interface with XML, and how to code the logic using the Kotlin programming language. These are the fundamental building blocks of any modern Android app."
                timestamp="14 hours ago"
                channel="freeCodeCamp.org"
                title="Android App Development Tutorial for Beginners-Your first app"
                image="https://i.ytimg.com/an_webp/FjrKMcnKahY/mqdefault_6s.webp?du=3000&sqp=CO7z3YsG&rs=AOn4CLD8u19NVdf9gGUyteRrqN3jBetXRQ"
            /><VideoRow
                views="22K"
                subs="4.44M"
                description="Let's build our first Android app - a tip calculator! This video assumes NO prior experience with Android, and by the end you'll have something an app you could publish. We'll cover how to create the user interface with XML, and how to code the logic using the Kotlin programming language. These are the fundamental building blocks of any modern Android app."
                timestamp="14 hours ago"
                channel="freeCodeCamp.org"
                title="Android App Development Tutorial for Beginners-Your first app"
                image="https://i.ytimg.com/an_webp/FjrKMcnKahY/mqdefault_6s.webp?du=3000&sqp=CO7z3YsG&rs=AOn4CLD8u19NVdf9gGUyteRrqN3jBetXRQ"
            /><VideoRow
                views="22K"
                subs="4.44M"
                description="Let's build our first Android app - a tip calculator! This video assumes NO prior experience with Android, and by the end you'll have something an app you could publish. We'll cover how to create the user interface with XML, and how to code the logic using the Kotlin programming language. These are the fundamental building blocks of any modern Android app."
                timestamp="14 hours ago"
                channel="freeCodeCamp.org"
                title="Android App Development Tutorial for Beginners-Your first app"
                image="https://i.ytimg.com/an_webp/FjrKMcnKahY/mqdefault_6s.webp?du=3000&sqp=CO7z3YsG&rs=AOn4CLD8u19NVdf9gGUyteRrqN3jBetXRQ"
            />
        </div>
    )
}

export default SearchPage
