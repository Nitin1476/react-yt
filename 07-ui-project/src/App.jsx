import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color: 'blue',
    tag: 'Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661645988351-345320df9e53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color: 'lightseagreen',
    tag: 'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1676119633019-be66d5c4bc4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color: 'red',
    tag: 'Underbanked'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661645988351-345320df9e53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color: 'pink',
    tag: 'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1617617964581-901e76d845aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color: 'black',
    tag: 'Average'
  }
]

  return (
    <div>
      <Section1 user={users}/>
      <Section2 />
    </div>
  )
}

export default App
