import { makeStyles } from '@material-ui/core/styles';
//test comment
const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    icon:{
        marginRight:'20px'
    },
    button:{
        marginTop:'40px'
    },
    cardGrid:{
      padding:'20px 0'
    },
    card:{
       height:'100%',
       display:'flex',
       flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%' //to achieve aspect ratio of 16:9
    },
    cardContent:{
        flexGrow:3
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding:'50px'
    }
}));

export default useStyles;