import { View, Text, ScrollView, StyleSheet } from "react-native"

const BillData = [
    {
        heading: "California Ends Strict Virus Restrictions as New Cases Fall",
        time: "2h ago",
        sponsor: "isabella kwai"
    },
    {
        heading: "Tokyo Olympics: Athletes to Sleep on Cardboard Beds to Prevent COVID-19",
        time: "5h ago",
        sponsor: "Yonette Joseph"
    },
    {
        heading: "Study Finds COVID-19 Can Affect Brain, Cause Hallucinations",
        time: "1d ago",
        sponsor: "Pam Belluck"
    },

    {
        heading: "Elon Musk's SpaceX Wins $2.9 Billion NASA Contract for Moon Lander",
        time: "3d ago",
        sponsor: "Kenneth Chang"
    },

    {
        heading: "Indianapolis Shooting: 8 Dead at FedEx Facility",
        time: "1w ago",
        sponsor: "Julie Bosman"
    },

    {
        heading: "Biden Administration Announces Sweeping New Sanctions on Russia",
        time: "2w ago",
        sponsor: "David E. Sanger"
    },

    {
        heading: "Facebook Oversight Board Upholds Trump Ban, But Orders Reconsideration",
        time: "2w ago",
        sponsor: "Cecilia Kang"
    },

    {
        heading: "Amazon Workers Reject Unionization Efforts in Alabama",
        time: "3w ago",
        sponsor: "Karen Weise"
    },

    {
        heading: "Derek Chauvin Found Guilty on All Charges in George Floyd Murder Trial",
        time: "4w ago",
        sponsor: "John Eligon"
    },

    {
        heading: "Prince Philip, Duke of Edinburgh, Dies at Age 99",
        time: "5w ago",
        sponsor: "Megan Specia"
    },

    {
        heading: "NASA's Ingenuity Helicopter Successfully Completes First Flight on Mars",
        time: "6w ago",
        sponsor: "Shannon Stirone"
    },

    {
        heading: "EU Regulator Finds Possible Link Between AstraZeneca Vaccine and Blood Clots",
        time: "7w ago",
        sponsor: "Matina Stevis-Gridneff"
    },

    {
        heading: "Myanmar's Military Stages Coup, Detains Leader Aung San Suu Kyi",
        time: "8w ago",
        sponsor: "Hannah Beech"
    },

    {
        heading: "Texas Power Grid Failure Leaves Millions Without Heat or Electricity",
        time: "9w ago",
        sponsor: "Manny Fernandez"
    },

    {
        heading: "GameStop and Other 'Meme Stocks' Spark Frenzy on Wall Street",
        time: "10w ago",
        sponsor: "Matt Phillips"
    },

    {
        heading: "Joe Biden Sworn in as 46th President of the United States",
        time: "11w ago",
        sponsor: "Katie Rogers"
    },
]

const BillList = ({item}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ paddingHorizontal:16, marginVertical:12 }}>
                <Text style={{ fontWeight:700, lineHeight: 20, fontSize:16  }} >{item.heading}</Text>
                <View style={{ display:'flex', flexDirection:'row', alignItems:'center'  }}>
                    <Text style={{ color:"#6c7072", lineHeight: 22, }}>{item.time}</Text>
                    <View style={styles.Bulletview}></View>
                    <Text style={{ color:"#6c7072", lineHeight: 22, }}>{item.sponsor}</Text>
                </View>
                </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Bulletview: {
        backgroundColor: "#6c7072",
        borderRadius: 50,
        height: 5,
        width:5,
        marginVertical: 5,
        marginHorizontal:8,
        alignItems: "center",
    },
});


export default BillList
