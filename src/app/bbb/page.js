import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <div className="container d-flex my-3">
                <div className="card">
                    <div className="card text-center">
                        <h2>Card</h2>
                        <Image
                            src="https://iyo-shimizuya.com/images/6c777518386e748e16696cfab5d3bc1c.jpg"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card text-center">
                        <h2>Card</h2>
                        <Image
                            src="https://iyo-shimizuya.com/images/6c777518386e748e16696cfab5d3bc1c.jpg"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card text-center">
                        <h2>Card</h2>
                        <Image
                            src="https://iyo-shimizuya.com/images/6c777518386e748e16696cfab5d3bc1c.jpg"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default page
