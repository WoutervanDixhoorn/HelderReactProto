import { useNavigationContext } from '@/context/NavigationProvider';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NavBar = () => {
  const { currentPage, setCurrentPage } = useNavigationContext();

  return (
    <View style={[styles.navContainer, styles.fixedToBottom]}>
        <TouchableOpacity onPress={() => setCurrentPage('Scan')}>
            <Text style={styles.navText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentPage('Rekeningen')}>
            <Text style={styles.navText}>Rekeningen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentPage('Brieven')}>
            <Text style={styles.navText}>Brieven</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#373737',
      height: 125,
      paddingBottom: 10,
      borderRadius: 20,
      marginBottom: -35 //Magic value, makes the navbar flush with the
  },
  fixedToBottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
  },
  navText: {
    fontSize: 20,
    color: 'white'
  }
});

export default NavBar