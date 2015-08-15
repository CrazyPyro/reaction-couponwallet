ReactionCore.registerPackage
  name: 'reaction-couponwallet'
  autoEnable: false # auto-enable in dashboard,transforms to enabled
  settings:
    # private package settings config (blackbox)
    mode: false
    client_id: ''
    client_secret: ''
    # public package settings
    public:
      notSoSecret: true
  registry: [
    # all options except route and template
    # are used to describe the
    # dashboard 'app card'.
    {
      provides: 'dashboard'
      label: 'CouponWallet'
      description: 'Accept CouponWallet coupons'
      icon: ''
      cycle: 3
      container: 'couponwallet'
      permissions: [
        {
          label: "Dashboard"
          permission: "dashboard"
        }
      ]
    }
    # configures settings link for app card
    # use 'group' to link to dashboard card
    {
      route: 'couponwallet'
      provides: 'settings'
      container: 'couponwallet'
    }
    # configures template for checkout
    # paymentMethod dynamic template
    {
      template: 'paypalPaymentForm'
      provides: 'paymentMethod'
    }
  ]

