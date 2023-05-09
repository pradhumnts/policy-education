import { useState } from 'react'
import { View, FlatList } from "react-native"
import ChatLIst from "../PageComponent/ChatLIst"

const EmailsData = [
    {
        image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        name: "Evelyn Anderson",
        Billname: "Netflix subscription",
        message: "Hello, your Netflix subscription payment has been...",
        date: "5 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Victoria Hanson",
        Billname: "Photos from holiday",
        message: "Hi, I put together some photos from...",
        date: "4 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1581087707353-6e019588a5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: "Victoria Hanson",
        Billname: "Lates order delivery",
        message: "Good morning! Hope you are good...",
        date: "2 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Victoria Hanson",
        Billname: "Photos from holiday",
        message: "Hi, I put together some photos from...",
        date: "4 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1581087707353-6e019588a5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: "Victoria Hanson",
        Billname: "Lates order delivery",
        message: "Good morning! Hope you are good...",
        date: "2 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Emma Green",
        Billname: "Monthly subscription",
        message: "Hello, your monthly subscription has been...",
        date: "15 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        name: "Sophie Carter",
        Billname: "Electricity bill",
        message: "Hello, your electricity bill for this month is...",
        date: "3 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Victoria Hanson",
        Billname: "Photos from holiday",
        message: "Hi, I put together some photos from...",
        date: "4 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1581087707353-6e019588a5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: "Victoria Hanson",
        Billname: "Lates order delivery",
        message: "Good morning! Hope you are good...",
        date: "2 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1518457900604-5c973dffdedf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        name: "Benjamin Lee",
        Billname: "Phone bill",
        message: "Dear customer, your phone bill for this month is...",
        date: "7 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Olivia Taylor",
        Billname: "Internet bill",
        message: "Hi, your internet bill for this month is...",
        date: "3 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Victoria Hanson",
        Billname: "Photos from holiday",
        message: "Hi, I put together some photos from...",
        date: "4 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1581087707353-6e019588a5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: "Victoria Hanson",
        Billname: "Lates order delivery",
        message: "Good morning! Hope you are good...",
        date: "2 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Victoria Hanson",
        Billname: "Photos from holiday",
        message: "Hi, I put together some photos from...",
        date: "4 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1581087707353-6e019588a5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: "Victoria Hanson",
        Billname: "Lates order delivery",
        message: "Good morning! Hope you are good...",
        date: "2 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Emma Green",
        Billname: "Monthly subscription",
        message: "Hello, your monthly subscription has been...",
        date: "15 may",
    },
    {
        image:
            "https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        name: "Sophie Carter",
        Billname: "Electricity bill",
        message: "Hello, your electricity bill for this month is...",
        date: "3 may",
    },
]

const Emails = () => {
    const [filteredEmail, setFilteredEmail] = useState(EmailsData);

const handleSearch = (text) => {
    setSearchValue(text);
    setFilteredEmail(EmailsData.filter((item) => item.summary.toLowerCase().includes(text.toLowerCase())));
  }

    return (
       <View>
        {/* <ChatLIst/> */}
        <FlatList
        data={filteredEmail}
        renderItem={({ item }) => <ChatLIst item={item} />}
        keyExtractor={(item) => item}
        />
       </View>
    )
}

export default Emails
