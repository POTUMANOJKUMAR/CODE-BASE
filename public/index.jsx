
const importIcons = (fileName) => `/Icons/${fileName}`;
  
  const headerIcons={
        profileLogo:importIcons("profile.svg"),
        headerSettingsIcon:importIcons("HeaderSettings.svg"),
        NotificationIcon:importIcons("Notification.svg"),
        mainLogo:importIcons("mainLogo.svg")
}
const sidebarIcons={
  credit:importIcons("creditcardActive.svg"),
  creditActive:importIcons("creditcardInActive.svg"),
  settings:importIcons("settingssolidInActive.svg"),
  settingsActive:importIcons("settingssolidActive.svg"),
  user:importIcons("userActive.svg"),
  userActive:importIcons("userInActive.svg")
  }

const ExportedData={
    headerIcons,
    sidebarIcons
}
export default ExportedData
