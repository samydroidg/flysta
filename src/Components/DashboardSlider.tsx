import { useState, useEffect } from "react"

import img1 from "../assets/ShipmentAndJobManagement.png"
import img2 from "../assets/ManifestAndDocumentManagement.png"
import img3 from "../assets/DigitalPODCollection.png"
import img4 from "../assets/MasterDataManagement.png"
import img5 from "../assets/SimpleAndIntuitiveInterface.png"
import img6 from "../assets/Real-TimeDeliveryUpdates.png"
import img7 from "../assets/IntelligentAlertsAndNotifications.png"
import img8 from "../assets/AdvanceDashboardAndAnalytics.png"
import img9 from "../assets/OperationalWorkflowAutomation.png"
import img10 from "../assets/ScalableLogisticsPlatform.png"

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

function DashboardSlider() {

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="relative w-full h-full">

      {/* IMAGE */}
      <img
        src={images[current]}
        className="w-full h-full object-cover rounded-xl"
      />

      {/* DOT NAVIGATION */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3">

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition
            ${current === index ? "bg-red-800" : "bg-blue-950"}`}
          />
        ))}

      </div>

    </div>
  )
}

export default DashboardSlider