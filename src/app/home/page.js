import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {

    useEffect(() => {
        const fetchMovies = async() => {
        try {
            const response = await axios.get('api/getPopularMovies')
            console.log(response)
        } catch (err) {
            console.log('err')
        }

        }
        fetchMovies()
    }, [])
    return (
        <AppLayout
            header={
                <h2 className="font-semiboid text-xl text-gray-800 loading-tight">
                    Home
                </h2>
            }>
            <Head>Laravel - Dashboard</Head>

            awefawefawefwa

        </AppLayout>
    )
}
export default Dashboard
