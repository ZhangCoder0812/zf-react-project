import { Layout } from 'antd';
import '../css/layout.css'
import MyRoutes from '../router/myRoutes'
import MySlider from '../components/myslider'

const { Header, Footer, Content } = Layout;
function MyLayout() {
  return <div className='layout_box'>
    <Layout className='ant_layout'>
      <MySlider />
      <Layout>
        <Header>Header</Header>
        <Content>
          <MyRoutes></MyRoutes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
}

export default MyLayout
