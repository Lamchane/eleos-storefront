import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import { CartWithCheckoutStep } from "types/global"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { Customer } from "@medusajs/medusa"
import BottomNav from "@modules/layout/components/bottom-menu"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: CartWithCheckoutStep | null
  customer: Omit<Customer, "password_hash"> | null
}) => {
  return (
    <div className="py-12">
      <div className="content-container" data-testid="cart-container">
        {cart?.items.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
            <div className="flex flex-col bg-white py-6 gap-y-6">
              {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )}
              <ItemsTemplate region={cart?.region} items={cart?.items} />
            </div>
            <div className="fixed w-full sm:w-auto sm:relative bottom-0 left-0 bg-white p-4 sm:p-0">
              <div className="sticky flex flex-col gapy-4 sm:gap-y-8 top-0 sm:top-12">
                {cart && cart.region && (
                  <>
                    <div className="bg-white py-0 sm:py-6">
                      <Summary cart={cart} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>

      {/* <BottomNav /> */}
    </div>
  )
}

export default CartTemplate
