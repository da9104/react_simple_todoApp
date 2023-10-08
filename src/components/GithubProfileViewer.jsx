import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'

const BASE_URL = "https://api.github.com/users"

export default function GithubProfileViewer() {
    const [username, setUsername] = useState('da9104')
    const [profile, setProfile] = useState({ data: null, isLoading: true })

    useEffect(
        function fetchUserOnchange() {
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}/${username}`)
                setProfile({ data: userResult.data, isLoading: false })
            }
            fetchUser()
        },
        [username]
    )

        function search(username) {
            setProfile({ data: null, isLoading: true })
            setUsername(username)
        }

         if (profile.isLoading) return <i>Loading... </i>

        return (
            <div>
                <SearchForm search={search} />
                <b>{profile.data.name}</b>
                <img src={profile.data.avatar_url} />
            </div>
        )
}