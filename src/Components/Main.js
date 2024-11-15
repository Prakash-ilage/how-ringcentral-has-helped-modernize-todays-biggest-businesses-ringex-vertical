import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Banner from "../assets/bcd4472b-ringcentral-modernized-biggest-businesses-images-0_10jg0p6000000000000000.webp";
// import BackgroundImage from "../assets/background.webp";

function Main() {

  const [data, setData] = useState({
      created: Timestamp.now(),
      campaignName: "Braze",
      assets: "How RingCentral has helped modernize today’s biggest businesses",
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      jobtitle: "",
      country: "",
      postal: "",
      phone: "",
      optIn: "false"
  })

  useEffect(() => {
    document.title = data.campaignName + " | " + data.assets;
  });

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
      await addDoc(collection(db, 'theleadcrafters'), {
          created: data.created,
          campaignName: data.campaignName,
          assets: data.assets,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          company: data.company,
          jobtitle: data.jobtitle,
          country: data.country,
          postal: data.postal,
          phone: data.phone,
          optIn: data.optIn
      })
      setData({...data, 
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        jobtitle: "",
        country: "",
        postal: "",
        phone: "",
        optIn: "false"
          });
      } 
      catch (err) {
      alert(err)
      }
      window.location.href = "assets/braze-logo.png"
  }
  return (
    <section className="bg-white">
      {/* <div className=' bg-cover bg-center w-full' style={{ backgroundImage: `url(${BackgroundImage})`}}> */}
      <div className="mx-auto grid max-w-screen-xl p-4 lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
        <div className="place-self-auto mx-auto lg:col-span-8">

          <p className="my-4 max-w-2xl font-normal text-gray-800 md:text-md lg:text-md">This comprehensive eBook showcases real-world case studies and success stories, illustrating how RingCentral’s unified communications solutions have enhanced productivity, streamlined operations, and driven growth.</p>
          <p className="my-4 max-w-2xl font-normal text-gray-800 md:text-md lg:text-md">By reading this eBook, you’ll gain valuable insights into:</p>

          <ul className="my-4 pl-6 list-disc max-w-2xl font-normal text-gray-800 md:text-md lg:text-md">
            <li>Leading enterprises organizations that have leveraged advanced technology to stay competitive and innovative in a rapidly changing landscape.</li>
          <li>The benefits of modernizing your communication systems.</li>
          <li>How a unified approach can positively impact your healthcare practice’s performance.</li>
          </ul>
          <p className="my-4 max-w-2xl font-normal text-gray-800 md:text-md lg:text-md">Download now to discover the path to a more connected and efficient future in healthcare.</p>
          <div className='flex py-4 items-center justify-center'>
            <img
              className="h-auto max-w-md border-2 border-gray-800"
              src={Banner}
              alt=""  
            />
          </div>
        </div>
        <div className="p-4 lg:col-span-4 bg-white justify-items-end md:justify-items-center">
          <div className="">
            <form className='text-left bg-gray-200 border border-spacing-2 rounded-sm p-6' onSubmit={handleSubmit} method="post">
              <h3 className='text-2xl mb-2 block font-medium text-gray-800 text-center'><b>Complete the Form Below</b></h3>
              <div className="mb-6 mt-4">
                {/* <label htmlFor="firstname" className="mb-2 block text-sm font-medium text-gray-900">First name*</label> */}
                <input type="text" 
                id="firstname" 
                className="block w-full rounded-lg border border-spacing-2 border-gray-800 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" 
                placeholder="First Name" 
                required 
                value={data.firstname} onChange= {(e) => setData({...data, firstname: e.target.value})}
                />
              </div>
              <div className="mb-6 mt-4">
                <input type="text" 
                id="lastname" 
                className="block w-full rounded-lg border border-spacing-2 border-gray-800 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" 
                placeholder="Last Name" 
                required 
                value={data.lastname} onChange= {(e) => setData({...data, lastname: e.target.value})}
                />
              </div>
              <div className="mb-6">
                <input type="email" id="email" 
                className="block w-full rounded-lg border border-spacing-2 border-gray-800 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" 
                placeholder="Email" 
                required 
                value={data.email} onChange= {(e) => setData({...data, email: e.target.value})}
                />
              </div>
              <div className="mb-6 mt-4">
                <input type="text" 
                id="jobtitle" 
                className="block w-full rounded-lg border border-spacing-2 border-gray-800 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" 
                placeholder="Job Title" 
                required 
                value={data.jobtitle} onChange= {(e) => setData({...data, jobtitle: e.target.value})}
                />
              </div>
              <div className="mb-6 mt-4">
                <input type="text" 
                id="company" 
                className="block w-full rounded-lg border border-spacing-2 border-gray-800 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" 
                placeholder="Company Name" 
                required 
                value={data.company} onChange= {(e) => setData({...data, company: e.target.value})}
                />
              </div>

              <div className="mb-6 mt-4">
                <input type="text" 
                id="phone" 
                className="block w-full rounded-lg border border-spacing-2 border-gray-800 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" 
                placeholder="Phone Number" 
                required 
                value={data.phone} onChange= {(e) => setData({...data, phone: e.target.value})}
                />
              </div>
              <div className="mb-6 mt-4">
                <select id="country" 
                className="block w-full rounded-lg border border-spacing-2 border-gray-800 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                value={data.country} onChange= {(e) => setData({...data, country: e.target.value})}>
                  <option defaultValue="">Country </option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Cote D'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran, Islamic Republic of</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">Korea, Democratic People's Republic of</option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao People's Democratic Republic</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libyan Arab Jamahiriya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia, Federated States of</option>
                  <option value="MD">Moldova, Republic of</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="AN">Netherlands Antilles</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory, Occupied</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthelemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="CS">Serbia and Montenegro</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">South Georgia and the South Sandwich Islands</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syrian Arab Republic</option>
                  <option value="TW">Taiwan, Province of China</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania, United Republic of</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">United States Minor Outlying Islands</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Viet Nam</option>
                  <option value="VG">Virgin Islands, British</option>
                  <option value="VI">Virgin Islands, U.s.</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </div>
              <div className="mb-2 mt-4 basis-1/2">
                <select id="industry" 
                className="block w-full rounded-lg border border-spacing-2 border-gray-800 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                required
                value={data.industry} onChange= {(e) => setData({...data, industry: e.target.value})}>
                  <option defaultValue="">Industry</option>
                  <option value="Accountants &amp; Actuaries">Accountants &amp; Actuaries</option>
                  <option value="Advertising, Marketing &amp; PR">Advertising, Marketing &amp; PR</option>
                  <option value="Banking - Corporate">Banking - Corporate</option>
                  <option value="Banking - Retail">Banking - Retail</option>
                  <option value="Brokerage &amp; VCs">Brokerage &amp; VCs</option>
                  <option value="Business Consultants">Business Consultants</option>
                  <option value="Clothing &amp; Textiles">Clothing &amp; Textiles</option>
                  <option value="Computer and Technology">Computer and Technology</option>
                  <option value="Computer Software">Computer Software</option>
                  <option value="Construction">Construction</option>
                  <option value="Consumer Goods">Consumer Goods</option>
                  <option value="Defence">Defence</option>
                  <option value="Education">Education</option>
                  <option value="Electronics &amp; Computers">Electronics &amp; Computers</option>
                  <option value="Emergency Services">Emergency Services</option>
                  <option value="Energy &amp; Utilities">Energy &amp; Utilities</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Food &amp; Beverage">Food &amp; Beverage</option>
                  <option value="Government – Central">Government – Central</option>
                  <option value="Government – Local">Government – Local</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Insurance">Insurance</option>
                  <option value="IT – Other">IT – Other</option>
                  <option value="Legal">Legal</option>
                  <option value="Logistics &amp; Distribution">Logistics &amp; Distribution</option>
                  <option value="Media &amp; Publishing">Media &amp; Publishing</option>
                  <option value="Metals / Mining">Metals / Mining</option>
                  <option value="Not for Profit">Not for Profit</option>
                  <option value="Pharmaceutical">Pharmaceutical</option>
                  <option value="Recruitment">Recruitment</option>
                  <option value="Retail">Retail</option>
                  <option value="Scientific">Scientific</option>
                  <option value="Sport &amp; Leisure">Sport &amp; Leisure</option>
                  <option value="Technology">Technology</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Wood, Leather &amp; Paper">Wood, Leather &amp; Paper</option>
                </select>
              </div>
              <div class="flex items-start mt-10">
                <div class="flex items-center h-5">
                  <input htmlFor="optIn" 
                    id='optIn'
                    name='optIn'
                    type="checkbox" 
                    className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-600"
                    value={data.optIn} onChange= {(e) => setData({...data, optIn: e.target.value})}
                  />
                </div>
                <label htmlFor="optIn" className="ml-2 text-sm font-light text-gray-900"><div>
  Please note by accessing advertiser content your details may be passed onto Content Lead &amp; RingCentral for fulfillment of ‘the offer’. The subscriber also permits the RingCentral to follow up the fulfillment of the offer by email, phone or letter. See the <a href="https://www.ringcentral.com/legal/last-update-july-29-2024/privacy-notice.html" style={{color: '#0000ff'}} target="_blank"><u>Privacy Policy</u></a> for more information.<br></br>
</div>
</label>
              </div>
             
              <div className='pb-4 flex justify-center mt-8'>
                <button type="submit" className="w-full rounded-lg bg-blue-600 shadow-lg shadow-blue-700/50 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 focus:outline-none focus:ring-4 focus:ring-blue-700">Download Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default Main