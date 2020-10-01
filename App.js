import React, { useEffect, useState } from 'react';

/* -------------------------------------------------------------------------- */
/*                              Animation Import                              */
/* -------------------------------------------------------------------------- */

import AnimatedSplash from "react-native-animated-splash-screen";


/* -------------------------------------------------------------------------- */
/*                        Container Navigation Imports                        */
/* -------------------------------------------------------------------------- */
import { NavigationContainer } from '@react-navigation/native';

/* -------------------------------------------------------------------------- */
/*                          Drawer And Bottom Navigation                      */
/* -------------------------------------------------------------------------- */

import DrawerNavigator from './screens/drawerNavigator'


/* -------------------------------------------------------------------------- */
/*                             ContextApi Provider                            */
/* -------------------------------------------------------------------------- */

import { ParentContext } from './contextApi/parentContextApi'



function App() {
  const [animationTime, setAnimationTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationTime(true)
    }, 350)
  }, [])

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={animationTime}
      logoImage={require("./assets/images/book.png")}
      backgroundColor={"#503182"}
      logoHeight={550}
      logoWidht={550}
    >

      <ParentContext>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer >
      </ParentContext>

    </AnimatedSplash>

  );
}
export default App;
