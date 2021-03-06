import React from 'react'
import styles from './home.css'
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

const GeneratorPassword = () => {
    return (
        <main>
            <header>
                <div className='header'>
                    <Navbar bg="light" expand="lg">
                        <p className='text-header'>Password Generator</p>
                    </Navbar>
                </div>
            </header>
            <container>
                <div className='body-button'>
                    <Button className='button' onClick={() => alert('creating') }>
                        Generate Password
                    </Button>
                </div>
                <div className='body-card'>
                    <div class="grid-container">
                        <div class="top"></div>
                        <div class="bottom"></div>
                    </div>
                </div>
            </container>
            <footer>
                <div className='footer'>
                    <Nav>

                    </Nav>
                </div>

            </footer>
        </main>


    )
}

export default GeneratorPassword