import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Signup(){
    const router = useRouter()
    const contentType = 'application/json'
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')
    
    const [form, setForm] = useState({})
    
    const handleChange = (e) => {
        const target = e.target
        const value =
        target.name === 'poddy_trained' ? target.checked : target.value
        const name = target.name
        
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = formValidate()
        if (Object.keys(errs).length === 0) {
          postData(form)
        } else {
          setErrors({ errs })
        }
      }

    const formValidate = () => {
        let err = {}
        if (!form.phone) err.phone = 'Mục "số điện thoại" chưa được điền'
        if (!form.password) err.password = 'Mục "mật khẩu" chưa được điền'
        return err
    }

    const postData = async (form) => {
        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
          })
          const json = await res.json()
          console.log(res.status)
          // Throw error with status code in case Fetch API req failed
          if (res.status==200) {
            document.cookie = `id=${json.id}; path=/`;
            document.cookie = `token=${json.token}; path=/`;
            document.cookie = `name=${json.name}; path=/`;
          }
          else{
            throw new Error("loi dang nhap")
          }
    
          // router.push('/')
        } catch (error) {
          setMessage(error.message)
        }
      }
    
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="phone">Số điện thoại:</label>
                <input
                    type="text"
                    maxLength="50"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0987654321"
                    required
                />   
                <br/> 


                <label htmlFor="password">Mật khẩu</label>
                <input
                    type="password"
                    maxLength="50"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="********"
                    required
                />
                <br/>                
                
                <button type="submit">
                    Submit
                </button>

            </form>
            <p>{message}</p>
            <div>
                {Object.keys(errors).map((err, index) => (
                <li key={index}>{err}</li>
                ))}
            </div>
        </>
    )
}