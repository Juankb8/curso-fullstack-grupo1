import { Routes, Route } from "react-router-dom"
import  HookExample  from './examples/HookExample';
import  PageColors  from './pages/PageColors';
import  PageFeeds from './pages/PageFeeds';
import Header from './components/Header'
function Application() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HookExample />} />
                <Route path="colors" element={<PageColors />} />
                <Route path="feeds" element={<PageFeeds />} />
            </Routes>
        </div>
    )
}

export default Application