"use client"

export default function Mail() {
  return (
    //I WANT TO MAKE A CLICK TO COPY EMAIL
    <div onClick={() => {navigator.clipboard.writeText("AdamSkold@gmail.com")}}>
        AdamSkold@gmail.com
    </div>
  )
}
