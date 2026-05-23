import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RegisterSchema } from '@/schemas/RegisterSchema'

const fieldStyle =
  'mt-2 w-full rounded-none border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring/50'

const Register = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries())
    const result = RegisterSchema.safeParse(values)

    if (!result.success) {
      const nextErrors = result.error.flatten().fieldErrors
      setErrors(nextErrors)
      return
    }

    setErrors({})
    alert('Registration successful')
    navigate('/')
  }

  const getFieldError = (fieldName) => errors?.[fieldName]?.[0]

  return (
    <main className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />

      <section className="container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              Create your account
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Register for a new account
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Set up your profile in a few steps and start exploring the catalog with your own account.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card/70 p-4">
                Faster checkout once you are signed in.
              </div>
              <div className="rounded-2xl border border-border bg-card/70 p-4">
                Keep track of your saved items and cart.
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/" className="font-medium text-foreground underline underline-offset-4">
                Return home
              </Link>
            </p>
          </div>

          <Card className="border-border/70 bg-card/90 shadow-2xl backdrop-blur">
            <CardHeader className="border-b border-border/60 pb-6">
              <CardTitle className="text-2xl">Registration form</CardTitle>
              <CardDescription>
                Fill in the required details below to create your account.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 pt-6">
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input id="name" name="name" type="text" placeholder="Your full name" className={fieldStyle} aria-invalid={Boolean(getFieldError('name'))} />
                  {getFieldError('name') && <p className="mt-1 text-sm text-red-500">{getFieldError('name')}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" className={fieldStyle} aria-invalid={Boolean(getFieldError('email'))} />
                  {getFieldError('email') && <p className="mt-1 text-sm text-red-500">{getFieldError('email')}</p>}
                </div>

                <div>
                  <label htmlFor="username" className="text-sm font-medium text-foreground">
                    User name
                  </label>
                  <input id="username" name="username" type="text" placeholder="Choose a username" className={fieldStyle} aria-invalid={Boolean(getFieldError('username'))} />
                  {getFieldError('username') && <p className="mt-1 text-sm text-red-500">{getFieldError('username')}</p>}
                </div>

                <div>
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                  </label>
                  <input id="password" name="password" type="password" placeholder="Create a password" className={fieldStyle} aria-invalid={Boolean(getFieldError('password'))} />
                  {getFieldError('password') && <p className="mt-1 text-sm text-red-500">{getFieldError('password')}</p>}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                    Confirm password
                  </label>
                  <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Re-enter your password" className={fieldStyle} aria-invalid={Boolean(getFieldError('confirmPassword'))} />
                  {getFieldError('confirmPassword') && <p className="mt-1 text-sm text-red-500">{getFieldError('confirmPassword')}</p>}
                </div>

                <Button type="submit" className="w-full rounded-full py-6 text-sm font-semibold">
                  Create account
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default Register