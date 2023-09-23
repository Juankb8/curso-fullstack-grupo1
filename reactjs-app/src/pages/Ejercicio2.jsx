import {ListaTemas} from './../componentsEJ2/ListaTemas'
import {CompBanner} from './../componentsEJ2/CompBanner'
import {CompFuncion} from './../componentsEJ2/CompFuncion'
import {CompImage} from './../componentsEJ2/CompImage'
import {CompSound} from './../componentsEJ2/CompSound'
import {CompVideo} from './../componentsEJ2/CompVideo'
import { Route, Routes } from 'react-router-dom'
import {NavBar} from './../componentsEJ2/NavBar'

export const Ejercicio2 = () => {
  return (<>
  <NavBar></NavBar>

  <Routes>
   <Route path="/compbanner" element={<CompBanner   banner='https://readycopiers.com.ar/wp-content/uploads/2018/10/banner-mercadolibre.jpg'/>}> </Route>
   <Route path="/compfuncion" element={<CompFuncion  />}> </Route>
   <Route path="/compimage" element={<CompImage  img='https://cdn.wamiz.fr/article/images/ES%20PHOTOS/mix/bulldogingles.jpg'   />}> </Route>
   <Route path="/compsound" element={<CompSound   sound="https://www.w3schools.com/html/horse.mp3"/>}> </Route>
   <Route path="/compvideo" element={<CompVideo  video='https://www.w3schools.com/html/mov_bbb.mp4'  />}> </Route>
   <Route path="/complistatemas" element={<ListaTemas   />}> </Route>
  
  </Routes>
  </>
  )
}
