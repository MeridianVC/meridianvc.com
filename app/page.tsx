// This is the main entrypoint for our application

import Base from '../components/UI/BaseComponent';
import './globals.css';

export default function Home() {
  return (
      <Base>
        <div className="container flex items-center p-4 mx-auto h-screen max-h-full justify-center">
          <main>
            <h1 className="text-xl text-dark bg-light-green">
              Meridian <span className="text-dark-green">Ventures</span>
            </h1>
          </main>
        </div>
      </Base>

  )};