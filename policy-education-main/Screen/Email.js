import { View, Text, ScrollView } from "react-native"

const EmailData = [
    {
        subject: "H.Con.Res. 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies.",
        sponsor: "Tariro Mzezewa",
        date: "Nov 25, 2020",
        email: "A day after the Centers for Disease Control and Prevention urged Americans to stay home for Thanksgiving, more than one million people in the United States got on planes, marking the second day that more than a million people have flown since March. Nearly three million additional people have flown in the days since.  The high number of travelers speaks to a sense of pandemic fatigue that many people are experiencing. For some, the desire to see family is worth the risk of potentially getting the coronavirus while traveling."
    }
]

const Email = () => {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}
     style={{ paddingHorizontal:18, marginTop:26 }}>
      {EmailData.map((email, index) => (
        <View key={index}>
            <View>
                <Text style={{ color: '#6c7072', fontWeight:700, marginVertical:18, fontSize:16 }}>
                    EMAIL
                </Text>
            </View>
          <Text style={{ fontWeight:700, fontSize:28, lineHeight: 40, }} >{email.subject}</Text>
          <View style={{ display:'flex', flexDirection:'row', marginVertical:25, }}>
             <Text style={{ fontWeight:600, fontSize:16, lineHeight:16  }}>to {email.sponsor} </Text>
             <Text style={{ fontSize:16, lineHeight:16 }}>{email.date}</Text>
          </View>
          <Text style={{  fontSize:16, lineHeight:28, fontWeight:400, fontFamily: "'Inter', sans-serif" }}>{email.email}</Text>
          <Text style={{ fontSize:16, lineHeight:28, fontWeight:400, marginTop:18 }}>{email.email}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default Email
