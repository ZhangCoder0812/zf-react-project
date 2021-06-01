import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import routes from "../router/routeAry";
const { Sider } = Layout;
function MySlider() {
  return (
    <Sider className="ant_slider">
      {/* <NavLink to='/home'>首页</NavLink>
      <NavLink to='/about'>关于页</NavLink> */}
      {routes.map((group, index) => {
        return (
          <ul key={index}>
            <li>{group.grouptitle}</li>
            {group.list.map((item) => {
              return (
                <NavLink key={item.path} to={item.path}>
                  {item.title}
                </NavLink>
              );
            })}
          </ul>
        );
      })}
    </Sider>
  );
}

export default MySlider;
