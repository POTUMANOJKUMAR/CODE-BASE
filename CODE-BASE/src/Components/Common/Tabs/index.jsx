// components/CommonTabs.jsx

import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../redux/reducers/tabSlice";
import styles from './styles.module.scss';



const CommonTabs = ({ tabList = [], tabKey = "defaultTabs" }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state?.tabs?.activeTabs[tabKey] || 0);
  console.log(activeTab,"active")

  const handleTabClick = (index) => {
    console.log(index,tabKey,"tab")
    dispatch(setActiveTab({tabKey, index}));
  };

  return (
    <div>
      <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
        {tabList?.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${styles.tabButton} ${
              activeTab === index ? styles.active : ''
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div style={{ padding: "20px" }}>
        {tabList[activeTab]?.content}
      </div>
    </div>
  );
};

export default CommonTabs;
