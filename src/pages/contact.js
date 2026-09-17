function buildBookingForm(){
    const formContainer = document.createElement("div");
    formContainer.classList.add('form-container')

    // Main Form 
    const bookingForm = document.createElement('form');
    bookingForm.id = 'booking-Form'
    formContainer.appendChild(bookingForm)

    const NameContainer = document.createElement('div')
    NameContainer.classList.add("name-section")
    bookingForm.appendChild(NameContainer)

    const name = document.createElement("p")
    name.textContent = "Name"
    name.classList.add("title", "Name")
    NameContainer.appendChild(name)
    
    // first Name

    const firstNameLabel = document.createElement('label')
    firstNameLabel.classList.add("firstNameLabel", "label")
    firstNameLabel.htmlFor = "first-name"
    firstNameLabel.textContent = "FIRST NAME"
    NameContainer.appendChild(firstNameLabel)

    const firstNameInput = document.createElement("input")
    firstNameInput.type = 'text'
    firstNameInput.classList.add("firstNameInput", "input")
    firstNameInput.id = "first-name"
    firstNameInput.required = true
    NameContainer.appendChild(firstNameInput)

    // Last Name
    const lastNameLabel = document.createElement('label')
    lastNameLabel.classList.add("lastNameLabel", "label")
    lastNameLabel.htmlFor = "last-name"
    lastNameLabel.textContent = "LAST NAME"
    NameContainer.appendChild(lastNameLabel)

    const lastNameInput = document.createElement("input")
    lastNameInput.type = 'text'
    lastNameInput.id = "last-name"
    lastNameInput.classList.add("lastNameInput", "input")
    lastNameInput.required = true
    NameContainer.appendChild(lastNameInput)

    // Email
    const emailContainer = document.createElement("div")
    emailContainer.classList.add("email-container")
    bookingForm.appendChild(emailContainer)

    const emailLabel = document.createElement('label')
    emailLabel.classList.add("emailLabel", "label")
    emailLabel.htmlFor = "email"
    emailLabel.textContent = "EMAIL"
    emailContainer.appendChild(emailLabel)

    const emailInput = document.createElement("input")
    emailInput.type = "email"
    emailInput.classList.add("emailInput", "input")
    emailInput.id = "email"
    emailInput.required = true
    emailContainer.appendChild(emailInput)

    // Phone Number
    const phoneNumberContainer = document.createElement("div")
    phoneNumberContainer.classList.add("email-container")
    bookingForm.appendChild(phoneNumberContainer)

    const phoneNumberLabel = document.createElement('label')
    phoneNumberLabel.classList.add("phoneNumberLabel", "label")
    phoneNumberLabel.htmlFor = "phone-number"
    phoneNumberLabel.textContent = "PHONE NO."
    phoneNumberContainer.appendChild(phoneNumberLabel)

    const phoneNumberInput = document.createElement("input")
    phoneNumberInput.type = "number"
    phoneNumberInput.classList.add("phoneNumberInput", "input")
    phoneNumberInput.id = "phone-number"
    phoneNumberInput.required = true
    phoneNumberContainer.appendChild(phoneNumberInput)

    // Date,Time, and Party Size
    const partySizeContainer = document.createElement("div")
    partySizeContainer.classList.add("party-size-container")
    bookingForm.appendChild(partySizeContainer)

    const partySizeLabel = document.createElement('label')
    partySizeLabel.classList.add("partySizeLabel", "label")
    partySizeLabel.htmlFor = "party-size"
    partySizeLabel.textContent = "PARTY SIZE"
    partySizeContainer.appendChild(partySizeLabel)

    const partySizeInput = document.createElement("input")
    partySizeInput.type = "number"
    partySizeInput.classList.add("partySizeInput", "input")
    partySizeInput.id = "party-size"
    partySizeInput.required = true
    partySizeContainer.appendChild(partySizeInput)


    const dateTimeContainer = document.createElement("div")
    dateTimeContainer.classList.add("date-time-container")
    bookingForm.appendChild(dateTimeContainer)

    const dateTimeLabel = document.createElement('label')
    dateTimeLabel.classList.add("dateTimeLabel", "label")
    dateTimeLabel.htmlFor = "date-time"
    dateTimeLabel.textContent = "DATE & TIME"
    dateTimeContainer.appendChild(dateTimeLabel)

    const dateTimeInput = document.createElement("input")
    dateTimeInput.type = "datetime-local"
    dateTimeInput.classList.add("dateTimeInput", "input")
    dateTimeInput.id = "date-time"
    dateTimeInput.required = true
    dateTimeContainer.appendChild(dateTimeInput)

    const now = new Date()
    const formatNow = now.toISOString().slice(0,16)
    dateTimeInput.min = formatNow;

    const submitBtn = document.createElement("button")
    submitBtn.type = "submit"
    submitBtn.textContent = "Book Table"
    bookingForm.appendChild(submitBtn)

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const selectedDateTime = dateTimeInput.value;
        console.log("Reservation at" + selectedDateTime);

        const [date, time] = selectedDateTime.split("T")
        alert(`Table reserved for ${date} at ${time}.`)
    })

return formContainer
}

function buildContactInfo(){
    
}

export function createContactPage(){
    const wrapper = document.createElement('main')
    wrapper.appendChild(buildBookingForm())

    return wrapper
}