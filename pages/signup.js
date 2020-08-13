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
        if (!form.name) err.name = 'Mục "tên" chưa được điền'
        if (!form.email) err.email = 'Mục "email" chưa được điền'
        if (!form.phone) err.phone = 'Mục "số điện thoại" chưa được điền'
        if (!form.password) err.password = 'Mục "mật khẩu" chưa được điền'
        if (!form.gender) err.gender = 'Mục "giới tính" chưa được chọn'
        return err
    }

    const postData = async (form) => {
        try {
          const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              Accept: contentType,
              'Content-Type': contentType,
            },
            body: JSON.stringify(form),
          })
    
          // Throw error with status code in case Fetch API req failed
          if (!res.ok) {
            throw new Error(res.status)
          }
    
          router.push('/')
        } catch (error) {
          setMessage('Failed to add pet')
        }
      }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Tên:</label>
                <input
                    type="text"
                    maxLength="50"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ngô Bảo Châu"
                    required
                />
                <br/>

                <label htmlFor="email">Địa chỉ email:</label>
                <input
                    type="email"
                    maxLength="50"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="abc@gmail.com"
                    required
                />
                <br/>

                

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
                
                <label htmlFor="type">Giới tính:</label><br/>
                <input type="radio" id="male" name="gender" value="male" onChange={handleChange}/>
                <label htmlFor="male">Nam</label><br/>
                <input type="radio" id="female" name="gender" value="female"  onChange={handleChange}/>
                <label htmlFor="female">Nữ</label><br/>
                <input type="radio" id="other" name="gender" value="other" onChange={handleChange}/>
                <label htmlFor="other">Khác</label><br/>

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