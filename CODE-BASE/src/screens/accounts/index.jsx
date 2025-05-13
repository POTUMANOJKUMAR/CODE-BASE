
import CommonTabs from "../../Components/Common/Tabs";


const Accounts = () => {
  const tabs = [
    { label: "Overview", content: <div>OverView</div> },
    { label: "Details", content: <div>Detailes</div> },
  ];

  const tabs_ = [
    { label: "Overview", content: <div>OverView</div> },
    { label: "Details", content: <div>Detailes</div> },
    { label: "Contact", content: <div>Contact</div> },
    { label: "Dev", content: <div>Dev</div> },
    { label: "List", content: <div>List</div> },
  ];


  return (

    <>
      <CommonTabs tabList={tabs} tabKey="exampleTabs" />

      <CommonTabs tabList={tabs_} tabKey="DummyTabs" />


    </>


  )
};

export default Accounts;
