const getters = {
  isCollapse: state => state.leftMenu.isCollapse,
  menuList: state => state.leftMenu.menuList,
  breadList: state => state.leftMenu.breadList,
  activeBread: state => state.leftMenu.activeBread

}
export default getters
