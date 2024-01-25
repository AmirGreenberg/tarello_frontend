import { useEffect } from "react"
import { useRef } from "react"

export function IconArrowDown({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z"
            />
        </svg>
    )
}
export function IconWorkspace({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                ref={refPath}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5048 5.67168C11.9099 5.32669 11.2374 5.10082 10.5198 5.0267C11.2076 3.81639 12.5085 3 14 3C16.2092 3 18 4.79086 18 7C18 7.99184 17.639 8.89936 17.0413 9.59835C19.9512 10.7953 22 13.6584 22 17C22 17.5523 21.5523 18 21 18H18.777C18.6179 17.2987 18.3768 16.6285 18.0645 16H19.917C19.4892 13.4497 17.4525 11.445 14.8863 11.065C14.9608 10.7218 15 10.3655 15 10C15 9.58908 14.9504 9.18974 14.857 8.80763C15.5328 8.48668 16 7.79791 16 7C16 5.89543 15.1046 5 14 5C13.4053 5 12.8711 5.25961 12.5048 5.67168ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM14 10C14 10.9918 13.639 11.8994 13.0412 12.5984C15.9512 13.7953 18 16.6584 18 20C18 20.5523 17.5523 21 17 21H3C2.44772 21 2 20.5523 2 20C2 16.6584 4.04879 13.7953 6.95875 12.5984C6.36099 11.8994 6 10.9918 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM9.99999 14C12.973 14 15.441 16.1623 15.917 19H4.08295C4.55902 16.1623 7.02699 14 9.99999 14Z"
                fill={color}
            />
        </svg>
    )
}
export function IconStarOutline({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                ref={refPath}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.49495 20.995L11.9999 18.6266L16.5049 20.995C16.8059 21.1533 17.1507 21.2079 17.4859 21.1504C18.3276 21.006 18.893 20.2066 18.7486 19.3649L17.8882 14.3485L21.5328 10.7959C21.7763 10.5585 21.9348 10.2475 21.9837 9.91094C22.1065 9.06576 21.5209 8.28106 20.6758 8.15825L15.6391 7.42637L13.3866 2.86236C13.2361 2.55739 12.9892 2.31054 12.6843 2.16003C11.9184 1.78206 10.9912 2.0965 10.6132 2.86236L8.36072 7.42637L3.32403 8.15825C2.98747 8.20715 2.67643 8.36564 2.43904 8.60917C1.84291 9.22074 1.85542 10.1998 2.46699 10.7959L6.11158 14.3485L5.25121 19.3649C5.19372 19.7 5.24833 20.0448 5.40658 20.3459C5.80401 21.1018 6.739 21.3924 7.49495 20.995ZM19.3457 10.0485L15.6728 13.6287L16.5398 18.684L11.9999 16.2972L7.45995 18.684L8.327 13.6287L4.65411 10.0485L9.72993 9.31093L11.9999 4.71146L14.2699 9.31093L19.3457 10.0485Z"
                fill={color}
            />
        </svg>
    )
}
export function IconStarFull({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                ref={refPath}
                d="M11.9999 18.6266L7.49495 20.995C6.739 21.3924 5.80401 21.1018 5.40658 20.3459C5.24833 20.0448 5.19372 19.7 5.25121 19.3649L6.11158 14.3485L2.46699 10.7959C1.85542 10.1998 1.84291 9.22074 2.43904 8.60917C2.67643 8.36564 2.98747 8.20715 3.32403 8.15825L8.36072 7.42637L10.6132 2.86236C10.9912 2.0965 11.9184 1.78206 12.6843 2.16003C12.9892 2.31054 13.2361 2.55739 13.3866 2.86236L15.6391 7.42637L20.6758 8.15825C21.5209 8.28106 22.1065 9.06576 21.9837 9.91094C21.9348 10.2475 21.7763 10.5585 21.5328 10.7959L17.8882 14.3485L18.7486 19.3649C18.893 20.2066 18.3276 21.006 17.4859 21.1504C17.1507 21.2079 16.8059 21.1533 16.5049 20.995L11.9999 18.6266Z"
                fill={color}
            />
        </svg>
    )
}
export function IconBell({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                ref={refPath}
                d="M6.586 17.829a2 2 0 002.829 0L6.585 15a2 2 0 000 2.829zm4.798-12.351A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725zm2.739 9.63c.517-.975 1.568-2.396 2.354-3.182l.725-.726a3.048 3.048 0 00.387-3.835c-.19-.286-.718-.766-.859-.86A3.043 3.043 0 0015.047 6a3.04 3.04 0 00-2.156.892l-.95.951c-.784.785-2.219 1.82-3.201 2.311l-1.74.87 6.07 6.069 1.053-1.985z"
                fill={color}
            />
        </svg>
    )
}
export function IconSearch({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                ref={refPath}
                d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
                fill={color}
            />
        </svg>
    )
}
export function IconInfo({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                ref={refPath}
                clipRule="evenodd"
                d="M2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12ZM4 12C4 16.4188 7.58124 20 12 20C16.4188 20 20 16.4188 20 12C20 7.58124 16.4188 4 12 4C7.58124 4 4 7.58124 4 12ZM8 10C7.99999 7.48383 10.3214 5.51108 12.9389 6.10713C14.3829 6.43513 15.5569 7.60513 15.8899 9.04813C16.3809 11.1771 15.1719 13.0911 13.3589 13.7471C13.1549 13.8201 13.0099 14.0021 13.0099 14.2191V14.0001C13.0099 14.5521 12.5629 15.0001 12.0099 15.0001C11.4579 15.0001 11.0099 14.5521 11.0099 14.0001V12.9871C11.0179 12.4411 11.4599 12.0001 11.9999 12.0001C13.1029 12.0001 13.9999 11.1021 13.9999 10.0001C13.9999 8.89713 13.1029 8.00013 11.9999 8.00013C10.8959 8.00013 9.99935 8.92313 10.0004 10.0271C9.98522 10.5666 9.54291 11 9 11C8.47773 11 8.04856 10.599 8.00385 10.0882C8.00385 10.0882 8 10.0297 8 10ZM12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17C13 17.552 12.552 18 12 18Z"
                fill={color}
            />
        </svg>
    )
}
export function IconBoard({ size = 16, color = 'var(--txtClr)' }) {
    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z"
                fill={color}
            />
        </svg>
    )
}
export function IconCalender({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                ref={refPath}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 4V5H4.995C3.892 5 3 5.893 3 6.994V19.006C3 20.106 3.893 21 4.995 21H19.005C20.108 21 21 20.107 21 19.006V6.994C21 5.895 20.107 5 19.005 5H18V4C18 3.448 17.552 3 17 3C16.448 3 16 3.448 16 4V5H8V4C8 3.448 7.552 3 7 3C6.448 3 6 3.448 6 4ZM5.25 9.571V17.718C5.25 18.273 5.694 18.714 6.243 18.714H17.758C18.3 18.714 18.75 18.268 18.75 17.718V9.571H5.25ZM9 13V10.999H7V13H9ZM17 10.999V13H15V10.999H17ZM11 13H13.001V10.999H11V13ZM7 17V15H9V17H7ZM11 17H13.001V15H11V17ZM17 15V17H15V15H17Z"
                fill={color}
            />
        </svg>
    )
}
export function IconSpaceShip({ size = 16, color = 'var(--txtClr)' }) {
    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                d="M17.5009 2.65511C18.4967 2.5456 19.5352 2.80718 20.364 3.63597L18.9498 5.05019C18.6192 4.71958 18.2151 4.58335 17.7106 4.63884C17.1593 4.69947 16.4959 4.96246 15.7486 5.38541C15.0122 5.80221 14.272 6.32856 13.5675 6.8454C13.4614 6.92326 13.3548 7.00186 13.2485 7.08031C12.6795 7.50008 12.1166 7.91532 11.6552 8.18878C11.1608 8.48182 10.6363 8.46971 10.3204 8.43815C9.98837 8.40498 9.19934 8.39748 7.94353 8.81849C7.16614 9.07911 6.21617 9.69953 5.40597 10.3177L5.34387 10.3653C5.59079 10.4171 5.85122 10.4646 6.11263 10.5076C6.62099 10.5913 7.11123 10.6543 7.47593 10.6964C7.65774 10.7174 7.80708 10.7331 7.9103 10.7434C7.96189 10.7486 8.00189 10.7525 8.02858 10.755L8.0584 10.7578L8.06686 10.7585L8.96578 11.8603L8.96537 11.8658L8.96296 11.8884C8.96079 11.909 8.95758 11.9404 8.95366 11.9813C8.9458 12.0632 8.93516 12.1826 8.92441 12.3287C8.9028 12.6224 8.88136 13.0163 8.88048 13.4263C8.87958 13.8425 8.90011 14.2437 8.95265 14.563C8.9897 14.7881 9.03099 14.8963 9.04531 14.9338C9.04927 14.9442 9.05033 14.9497 9.05033 14.9497C9.05033 14.9497 9.05582 14.9507 9.06621 14.9547C9.10371 14.969 9.2119 15.0103 9.43702 15.0474C9.75627 15.0999 10.1575 15.1204 10.5737 15.1195C10.9837 15.1186 11.3777 15.0972 11.6714 15.0756L12.1391 15.0341L13.2414 15.933L13.3036 16.5241C13.3457 16.8888 13.4087 17.379 13.4924 17.8874C13.5354 18.1488 13.583 18.4092 13.6347 18.6561L13.6823 18.594C14.3005 17.7838 14.9209 16.8339 15.1815 16.0565C15.6025 14.8007 15.595 14.0116 15.5619 13.6796C15.5303 13.3637 15.5182 12.8392 15.8112 12.3448C16.0847 11.8834 16.4999 11.3206 16.9197 10.7515C16.9981 10.6452 17.0767 10.5386 17.1546 10.4325C17.6715 9.72798 18.1978 8.98784 18.6146 8.25143C19.0376 7.50416 19.3005 6.84067 19.3612 6.28939C19.4167 5.78487 19.2804 5.38079 18.9498 5.05019L20.364 3.63597C21.1928 4.46477 21.4544 5.50334 21.3449 6.4991C21.2405 7.4481 20.8244 8.39124 20.3504 9.22877C19.8702 10.0772 19.2817 10.9 18.762 11.6084C18.674 11.7284 18.5889 11.8439 18.5069 11.9552C18.0946 12.5148 17.7615 12.9669 17.5439 13.3284C17.5413 13.3535 17.5403 13.3991 17.5477 13.4727C17.6103 14.0997 17.58 15.1726 17.0735 16.6835C16.7017 17.7925 15.9064 18.9623 15.2669 19.8003C14.9374 20.2322 14.6293 20.6014 14.4034 20.8629C14.2902 20.9939 14.1971 21.0986 14.1314 21.1714C14.0985 21.2078 14.0725 21.2363 14.0543 21.2561L14.0267 21.286L14.0239 21.289C13.8388 21.4871 13.5813 21.6021 13.3108 21.6073C13.0403 21.6124 12.7798 21.5076 12.5889 21.3167C12.3731 21.1009 12.2313 20.8327 12.1361 20.6177C12.0339 20.3868 11.9481 20.1296 11.8751 19.8725C11.729 19.3576 11.6128 18.7648 11.5231 18.2197C11.4566 17.8154 11.4027 17.425 11.3611 17.0937C11.1199 17.1058 10.8496 17.1146 10.5694 17.1152C10.1037 17.1162 9.57892 17.0947 9.10468 17.0166C8.69213 16.9487 8.05261 16.7804 7.63611 16.3639C7.21962 15.9474 7.05129 15.3079 6.9834 14.8953C6.90535 14.4211 6.88378 13.8964 6.88478 13.4306C6.88539 13.1504 6.89426 12.8801 6.90635 12.6389C6.57502 12.5974 6.18466 12.5434 5.78029 12.4769C5.23522 12.3872 4.64237 12.271 4.12751 12.1249C3.8704 12.0519 3.61317 11.9661 3.38231 11.8639C3.16733 11.7687 2.89915 11.6269 2.68332 11.4111C2.49244 11.2202 2.38758 10.9597 2.39276 10.6892C2.39794 10.4187 2.51272 10.1614 2.71081 9.97631L2.71401 9.97332L2.72063 9.96718L2.74387 9.94573C2.76373 9.92748 2.79221 9.90147 2.82863 9.86862C2.90143 9.80296 3.00612 9.70979 3.13714 9.59661C3.39866 9.37069 3.76781 9.06262 4.19969 8.73309C5.03769 8.09367 6.20752 7.29836 7.31652 6.92656C8.8274 6.42004 9.90036 6.3897 10.5273 6.45233C10.6009 6.45968 10.6465 6.45871 10.6716 6.45614C11.0331 6.23853 11.4852 5.90543 12.0448 5.49314C12.1561 5.41114 12.2716 5.32601 12.3916 5.23804C13.1 4.71833 13.9228 4.12982 14.7712 3.64963C15.6088 3.1756 16.5519 2.75948 17.5009 2.65511Z"
                fill={color}
            />
            <path
                d="M15.4143 8.58572C15.8048 8.97624 16.438 8.97624 16.8285 8.58572C17.219 8.1952 17.219 7.56203 16.8285 7.17151C16.438 6.78098 15.8048 6.78098 15.4143 7.17151C15.0238 7.56203 15.0238 8.1952 15.4143 8.58572Z"
                fill={color}
            />
        </svg>
    )
}
export function IconFlash({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (20 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (20 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <path
                ref={refPath}
                d="M8.21234 2.79947C8.29833 2.61633 8.48261 2.49955 8.68494 2.5L15.3137 2.51465C15.5157 2.51509 15.6993 2.63238 15.7846 2.81556C15.87 2.99874 15.8416 3.21473 15.7119 3.36971L12.1298 7.65085H15.1664C15.3797 7.65085 15.5715 7.78094 15.6503 7.97916C15.7292 8.17738 15.6792 8.40365 15.5242 8.55019L5.54499 17.9827C5.35867 18.1588 5.07191 18.1731 4.86897 18.0165C4.66602 17.8598 4.60726 17.5788 4.73044 17.3539L7.87765 11.6092H4.89583C4.71761 11.6092 4.55176 11.5181 4.4562 11.3676C4.36064 11.2172 4.34863 11.0283 4.42438 10.867L8.21234 2.79947Z"
                fill={color}
            />
        </svg>
    )
}
export function IconFilter({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                ref={refPath}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.61799 6C3.87461 6 3.39111 6.78231 3.72356 7.44721L3.99996 8H20L20.2763 7.44721C20.6088 6.78231 20.1253 6 19.3819 6H4.61799ZM10.8618 17.7236C10.9465 17.893 11.1196 18 11.309 18H12.6909C12.8803 18 13.0535 17.893 13.1382 17.7236L14 16H9.99996L10.8618 17.7236ZM17 13H6.99996L5.99996 11H18L17 13Z"
                fill={color}
            />
        </svg>
    )
}
export function Icon3DotsWithSpacing({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 26 20"
        >
            <path
                ref={refPath}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                fill={color}
            />
        </svg>
    )
}
export function IconShare({ size = 16, color = 'var(--txtClr)' }) {
    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 9.44777 7.61532 10.7518 8.59871 11.6649C5.31433 13.0065 3 16.233 3 20C3 20.5523 3.44772 21 4 21H12C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19H5.07089C5.55612 15.6077 8.47353 13 12 13ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z"
                fill={color}
            />
            <path
                d="M17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H17V14Z"
                fill={color}
            />
        </svg>
    )
}
export function IconLargeThinPlus({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                ref={refPath}
                d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z"
                fill={color}
            />
        </svg>
    )
}
export function IconClock({ size = 16, color = 'var(--txtClr)' }) {
    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path
                d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                fill={color}
            />
        </svg>
    )
}

export function Icon3DotsNarrowGap({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M12 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-4.5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
            />
        </svg>
    )
}

export function IconAlignText({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z"
            />
        </svg>
    )
}

export function IconArrow({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.292 4.29149C11.903 4.67949 11.903 5.31649 12.292 5.70549L17.586 10.9995H4C3.45 10.9995 3 11.4495 3 11.9995C3 12.5505 3.45 13.0005 4 13.0005H17.586L12.289 18.2965C11.9 18.6855 11.9 19.3215 12.289 19.7105C12.678 20.1005 13.315 20.1005 13.703 19.7105L20.702 12.7125C20.704 12.7115 20.706 12.7095 20.709 12.7075C20.903 12.5145 21 12.2565 21 11.9995C21 11.7425 20.903 11.4855 20.709 11.2915C20.706 11.2905 20.703 11.2885 20.701 11.2865L13.706 4.29149C13.512 4.09749 13.255 4.00049 12.999 4.00049C12.743 4.00049 12.486 4.09749 12.292 4.29149Z"
            />
        </svg>
    )
}

export function IconAttachment({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6426 17.9647C10.1123 19.46 7.62736 19.4606 6.10092 17.9691C4.57505 16.478 4.57769 14.0467 6.10253 12.5566L13.2505 5.57184C14.1476 4.6952 15.5861 4.69251 16.4832 5.56921C17.3763 6.44184 17.3778 7.85135 16.4869 8.72199L9.78361 15.2722C9.53288 15.5172 9.12807 15.5163 8.86954 15.2636C8.61073 15.0107 8.60963 14.6158 8.86954 14.3618L15.0989 8.27463C15.4812 7.90109 15.4812 7.29546 15.0989 6.92192C14.7167 6.54838 14.0969 6.54838 13.7146 6.92192L7.48523 13.0091C6.45911 14.0118 6.46356 15.618 7.48523 16.6163C8.50674 17.6145 10.1511 17.6186 11.1679 16.6249L17.8712 10.0747C19.5274 8.45632 19.5244 5.83555 17.8676 4.2165C16.2047 2.59156 13.5266 2.59657 11.8662 4.21913L4.71822 11.2039C2.42951 13.4404 2.42555 17.083 4.71661 19.3218C7.00774 21.5606 10.7323 21.5597 13.0269 19.3174L19.7133 12.7837C20.0956 12.4101 20.0956 11.8045 19.7133 11.431C19.331 11.0574 18.7113 11.0574 18.329 11.431L11.6426 17.9647Z"
            />
        </svg>
    )
}

export function IconBag({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V6H19V20H5V6H7V5ZM9 6H15V5H9V6ZM7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9V16C11 16.5523 10.5523 17 10 17H8C7.44772 17 7 16.5523 7 16V9ZM14 8C13.4477 8 13 8.44772 13 9V14C13 14.5523 13.4477 15 14 15H16C16.5523 15 17 14.5523 17 14V9C17 8.44772 16.5523 8 16 8H1"
            />
        </svg>
    )
}

export function IconBold({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M8 6h4.832C13.908 6 16 6.5 16 9c0 1.333-.333 2.167-1 2.5 1.333.333 2 1.333 2 3 0 .5 0 3.5-4 3.5H8a1 1 0 01-1-1V7a1 1 0 011-1zm1 10h3.5c1 0 2-.25 2-1.5s-1.104-1.5-2-1.5H9v3zm0-4.975h3c.504 0 2 0 2-1.525S12 8 12 8H9v3.025z"
                fillRule="evenodd"
            />
        </svg>
    )
}

export function IconChecked({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13V18H6V6L16 6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H6ZM8.73534 10.3223C8.36105 9.91618 7.72841 9.89038 7.3223 10.2647C6.91619 10.639 6.89039 11.2716 7.26467 11.6777L10.8768 15.597C11.4143 16.1231 12.2145 16.1231 12.7111 15.6264L13.0754 15.2683C13.3699 14.9785 13.6981 14.6556 14.0516 14.3075C15.0614 13.313 16.0713 12.3169 17.014 11.3848L17.0543 11.3449C18.7291 9.68869 20.0004 8.42365 20.712 7.70223C21.0998 7.30904 21.0954 6.67589 20.7022 6.28805C20.309 5.90022 19.6759 5.90457 19.2881 6.29777C18.5843 7.01131 17.3169 8.27244 15.648 9.92281L15.6077 9.96263C14.6662 10.8937 13.6572 11.8889 12.6483 12.8825L11.8329 13.6851L8.73534 10.3223Z"
            />
        </svg>
    )
}

export function IconCover({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 -2 22 22"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5ZM19 7H5V13H19V7Z"
            />
        </svg>
    )
}

export function IconArrowTopRightCorner() {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
        </svg>
    )
}

export function IconCustomField({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H11C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6H3ZM4 16V12H20V16H4ZM2 12C2 10.8954 2.89543 10 4 10H20C21.1046 10 22 10.8954 22 12V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V12Z"
            />
        </svg>
    )
}

export function IconDuplicate({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 16V4.99188C5 3.8918 5.90195 3 7.00853 3H14.9915L15 3.00002V5H7V16H5ZM8 19C8 20.1046 8.89543 21 10 21H18C19.1046 21 20 20.1046 20 19V8C20 6.89543 19.1046 6 18 6H10C8.89543 6 8 6.89543 8 8V19ZM10 8V19H18V8H10Z"
            />
        </svg>
    )
}

export function IconFlag({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M6 12.235v6.446c0 .537.45.977 1 .977s1-.44 1-.977v-5.778c1.17-.341 2.389-.045 3.768.29.982.238 2.036.495 3.13.495a5.73 5.73 0 0 0 2.547-.567 1 1 0 0 0 .563-.9V5.466a.998.998 0 0 0-1.437-.9c-1.345.654-2.731.317-4.331-.071-1.729-.42-3.687-.895-5.678.072A1 1 0 0 0 6 5.466v6.769zm3.111-1.48c1.094 0 2.148.256 3.129.495 1.381.335 2.6.63 3.768.289V6.836c-1.488.27-2.93-.08-4.24-.398-1.379-.335-2.598-.632-3.768-.29v4.704a6.195 6.195 0 0 1 1.111-.097z"
            />
        </svg>
    )
}

export function IconTerllo({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
            />
        </svg>
    )
}

export function IconUppp({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M12.005 8.187l-6.453 3.865a1 1 0 0 1-1.028-1.716l6.97-4.174a1 1 0 0 1 1.031.002l6.906 4.174a1 1 0 1 1-1.035 1.712l-6.39-3.863z"
            />
        </svg>
    )
}

export function IconV({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    useEffect(() => {
        const xDiff = (24 - refPath.current.getBBox().width) / 2
        const yDiff = (24 - refPath.current.getBBox().height) / 2
        refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M1.49022 3.21486C1.2407 2.94412 0.818938 2.92692 0.548195 3.17644C0.277453 3.42597 0.260252 3.84773 0.509776 4.11847L2.91785 6.73131C3.2762 7.08204 3.80964 7.08204 4.14076 6.75092C4.18159 6.71082 4.18159 6.71082 4.38359 6.51218C4.57995 6.31903 4.79875 6.1037 5.03438 5.87167C5.70762 5.20868 6.38087 4.54459 7.00931 3.92318L7.0362 3.89659C8.15272 2.79246 9.00025 1.9491 9.47463 1.46815C9.73318 1.20602 9.73029 0.783922 9.46815 0.525367C9.20602 0.266812 8.78392 0.269712 8.52537 0.531843C8.05616 1.00754 7.21125 1.84829 6.09866 2.94854L6.07182 2.97508C5.4441 3.59578 4.77147 4.25926 4.09883 4.92165C3.90522 5.11231 3.72299 5.29168 3.55525 5.4567L1.49022 3.21486Z"
            />
        </svg>
    )
}

export function IconCheckSquare({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (448 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (512 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
        </svg>
    )
}

export function IconWatch({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M12.0006 18C7.46367 18 4.00142 13.74 4.00142 12C4.00142 9.999 7.45967 6 12.0006 6C16.3775 6 19.9988 9.973 19.9988 12C19.9988 13.74 16.5366 18 12.0006 18ZM12.0006 4C6.48003 4 2.00012 8.841 2.00012 12C2.00012 15.086 6.5771 20 12.0006 20C17.4241 20 22.0001 15.086 22.0001 12C22.0001 8.841 17.5212 4 12.0006 4ZM11.9775 13.9844C10.8745 13.9844 9.97752 13.0874 9.97752 11.9844C9.97752 10.8814 10.8745 9.9844 11.9775 9.9844C13.0805 9.9844 13.9775 10.8814 13.9775 11.9844C13.9775 13.0874 13.0805 13.9844 11.9775 13.9844ZM11.9775 7.9844C9.77152 7.9844 7.97752 9.7784 7.97752 11.9844C7.97752 14.1904 9.77152 15.9844 11.9775 15.9844C14.1835 15.9844 15.9775 14.1904 15.9775 11.9844C15.9775 9.7784 14.1835 7.9844 11.9775 7.9844Z"
            />
        </svg>
    )
}

export function IconX({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="5 5 15 15"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z"
            />
        </svg>
    )
}

export function IconXSmall({ size = 12, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="3 3 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z"
            />
        </svg>
    )
}

export function IconXLarge({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="4.8 5 14 14"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z"
            />
        </svg>
    )
}

export function IconPrevious({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M15.1573 16.6865C15.2661 16.7938 15.3524 16.9215 15.4113 17.0624C15.4703 17.2033 15.5006 17.3545 15.5006 17.5073C15.5006 17.66 15.4703 17.8112 15.4113 17.9521C15.3524 18.093 15.2661 18.2208 15.1573 18.328C14.9368 18.5457 14.6394 18.6677 14.3296 18.6677C14.0197 18.6677 13.7223 18.5457 13.5018 18.328L10.0426 14.898C9.92341 14.7798 9.82877 14.6391 9.76419 14.4842C9.69961 14.3292 9.66636 14.1629 9.66636 13.995C9.66636 13.8271 9.69961 13.6609 9.76419 13.5059C9.82877 13.3509 9.92341 13.2102 10.0426 13.092L13.4901 9.67369C13.7107 9.45568 14.0083 9.33341 14.3185 9.33341C14.6286 9.33341 14.9262 9.45568 15.1468 9.67369C15.2556 9.78093 15.3419 9.90871 15.4008 10.0496C15.4598 10.1905 15.4901 10.3417 15.4901 10.4944C15.4901 10.6472 15.4598 10.7984 15.4008 10.9393C15.3419 11.0802 15.2556 11.208 15.1468 11.3152L12.4425 13.995L15.1573 16.6865V16.6865Z"
            />
        </svg>
    )
}

export function IconQuestion({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M12 18a1 1 0 010-2 1 1 0 010 2m-2-9a1 1 0 11-2 0 1 1 0 012 0"
            />
        </svg>
    )
}
export function IconShareSocial({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M6 15C6.79565 15 7.55871 14.6839 8.12132 14.1213C8.68393 13.5587 9 12.7956 9 12C9 11.2043 8.68393 10.4413 8.12132 9.87867C7.55871 9.31606 6.79565 8.99999 6 8.99999C5.20435 8.99999 4.44129 9.31606 3.87868 9.87867C3.31607 10.4413 3 11.2043 3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15ZM6 13C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1053 5.73478 11 6 11C6.26522 11 6.51957 11.1053 6.70711 11.2929C6.89464 11.4804 7 11.7348 7 12C7 12.2652 6.89464 12.5196 6.70711 12.7071C6.51957 12.8946 6.26522 13 6 13ZM18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2043 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2043 15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21ZM18 19C17.7348 19 17.4804 18.8946 17.2929 18.7071C17.1054 18.5196 17 18.2652 17 18C17 17.7348 17.1054 17.4804 17.2929 17.2929C17.4804 17.1053 17.7348 17 18 17C18.2652 17 18.5196 17.1053 18.7071 17.2929C18.8946 17.4804 19 17.7348 19 18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M7 13.562L15.66 18.562L16.66 16.83L8 11.83L7 13.562Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7 10.83L8 12.562L16.66 7.56199L15.66 5.82999L7 10.83Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7ZM18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" fill={color} />

        </svg>
    )
}
export function IconSmallArrowDown({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
            />
        </svg>
    )
}
export function IconTaskDetails({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    useEffect(() => {
        const xDiff = (24 - refPath.current.getBBox().width) / 2
        const yDiff = (24 - refPath.current.getBBox().height) / 2
        refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M18.17,0H2.24C1,0,0,1,0,2.24V13.56c0,1.24,1,2.24,2.24,2.24h15.92c1.24,0,2.24-1,2.24-2.24V2.24c0-1.24-1-2.24-2.24-2.24ZM8.15,13.95H3.36c-.77,0-1.4-.63-1.4-1.4s.63-1.4,1.4-1.4h4.79c.77,0,1.4,.63,1.4,1.4s-.63,1.4-1.4,1.4Zm8.89,0c-.77,0-1.4-.62-1.4-1.4s.62-1.4,1.4-1.4,1.4,.62,1.4,1.4-.62,1.4-1.4,1.4Zm1.03-4.74H2.33c-.2,0-.36-.16-.36-.36V2.37c0-.2,.16-.36,.36-.36h15.75c.2,0,.36,.16,.36,.36v6.48c0,.2-.16,.36-.36,.36Z"
            />
        </svg>
    )
}
export function IconMatrix({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z"
            />
        </svg>
    )
}
export function IconNew({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M17.17 12C17.17 11.4477 17.6177 11 18.17 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H18.17C17.6177 13 17.17 12.5523 17.17 12Z"
            />
        </svg>
    )
}
export function IconNext({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="2 2 22 22"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M10.294 9.69805C10.2008 9.60614 10.1268 9.49661 10.0763 9.37584C10.0258 9.25507 9.99976 9.12546 9.99976 8.99455C9.99976 8.86364 10.0258 8.73403 10.0763 8.61327C10.1268 8.4925 10.2008 8.38297 10.294 8.29105C10.4831 8.10449 10.738 7.99988 11.0035 7.99988C11.2691 7.99988 11.524 8.10449 11.713 8.29105L14.678 11.2311C14.7802 11.3324 14.8614 11.453 14.9167 11.5858C14.9721 11.7186 15.0006 11.8611 15.0006 12.0051C15.0006 12.149 14.9721 12.2915 14.9167 12.4243C14.8614 12.5572 14.7802 12.6777 14.678 12.7791L11.723 15.7091C11.534 15.8959 11.2789 16.0007 11.013 16.0007C10.7472 16.0007 10.4921 15.8959 10.303 15.7091C10.2098 15.6171 10.1358 15.5076 10.0853 15.3868C10.0348 15.2661 10.0088 15.1365 10.0088 15.0056C10.0088 14.8746 10.0348 14.745 10.0853 14.6243C10.1358 14.5035 10.2098 14.394 10.303 14.3021L12.621 12.0051L10.294 9.69805V9.69805Z"
            />
        </svg>
    )
}

export function IconPencail({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="3 0.5 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M7.82034 14.4893L9.94134 16.6103L18.4303 8.12131L16.3093 6.00031H16.3073L7.82034 14.4893ZM17.7233 4.58531L19.8443 6.70731C20.6253 7.48831 20.6253 8.7543 19.8443 9.53531L10.0873 19.2933L5.13734 14.3433L14.8943 4.58531C15.2853 4.19531 15.7973 4.00031 16.3093 4.00031C16.8203 4.00031 17.3323 4.19531 17.7233 4.58531ZM5.20094 20.4097C4.49794 20.5537 3.87694 19.9327 4.02094 19.2297L4.80094 15.4207L9.00994 19.6297L5.20094 20.4097Z"
            />
        </svg>
    )
}

export function IconPencilLabels() {
    return (
        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.82034 14.4893L9.94134 16.6103L18.4303 8.12131L16.3093 6.00031H16.3073L7.82034 14.4893ZM17.7233 4.58531L19.8443 6.70731C20.6253 7.48831 20.6253 8.7543 19.8443 9.53531L10.0873 19.2933L5.13734 14.3433L14.8943 4.58531C15.2853 4.19531 15.7973 4.00031 16.3093 4.00031C16.8203 4.00031 17.3323 4.19531 17.7233 4.58531ZM5.20094 20.4097C4.49794 20.5537 3.87694 19.9327 4.02094 19.2297L4.80094 15.4207L9.00994 19.6297L5.20094 20.4097Z" fill="currentColor"></path>
        </svg>
    )
}

export function IconPlusSmall({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="4 4 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M13 11V7a1 1 0 00-2 0v4H7a1 1 0 000 2h4v4a1 1 0 002 0v-4h4a1 1 0 000-2h-4z"
            />
        </svg>
    )
}

export function IconChart({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M1.66683 9.66665C0.93045 9.66665 0.333496 9.06969 0.333496 8.33331V1.66665C0.333496 0.930267 0.93045 0.333313 1.66683 0.333313H12.3335C13.0699 0.333313 13.6668 0.930267 13.6668 1.66665V8.33331C13.6668 9.06969 13.0699 9.66665 12.3335 9.66665H1.66683ZM12.3335 5.66665V4.33331H5.66683V5.66665H12.3335ZM12.3335 2.99998V1.66665H5.66683V2.99998H12.3335ZM12.3335 6.99998V8.33331H5.66683V6.99998H12.3335ZM1.66683 4.33331V5.66665H4.3335V4.33331H1.66683ZM1.66683 6.99998V8.33331H4.3335V6.99998H1.66683ZM1.66683 2.99998V1.66665H4.3335V2.99998H1.66683Z"
            />
        </svg>
    )
}

export function IconLock({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M5 11C5 9.89543 5.89543 9 7 9H8H10H14H16H17C18.1046 9 19 9.89543 19 11V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V11ZM10 11H14H16H17V19H7V11H8H10ZM14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z"
            />
        </svg>
    )
}

export function IconMan({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg width={size} height={size} role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z" fill={color} />
        </svg>
    )
}

export function IconMarkDown({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M5 7H3V17H5V10L8 13.5L11 10V17H13V7H11L8 10.4L5 7Z"
            />
        </svg>
    )
}

export function IconList({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M6 8c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 010 2h-6a1 1 0 010-2zm-5 5c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 010 2h-6a1 1 0 010-2zm-5 5c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm5-1h6a1 1 0 010 2h-6a1 1 0 010-2z"
            />
        </svg>
    )
}
export function Icon_i({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            />
        </svg>
    )
}

export function IconItalic({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M10 6h6a1 1 0 010 2h-6a1 1 0 110-2zM8 16h6a1 1 0 010 2H8a1 1 0 010-2zm4-8h2l-2 8h-2l2-8z"
            />
        </svg>
    )
}
export function IconLabel({ size = 16, color = 'var(--txtClr)' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width={size} height={size} viewBox="0 0 67.000000 67.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,67.000000) scale(0.100000,-0.100000)" stroke="none">
                <path fill={color} d="M178 513 c-134 -135 -167 -186 -168 -257 -1 -131 102 -236 231 -236 83 1 121 25 263 168 101 102 129 136 129 157 -1 22 -28 55 -134 161 -113 113 -138 134 -164 134 -25 0 -50 -20 -157 -127z m297 -273 c-119 -119 -160 -150 -213 -157 -118 -16 -218 102 -182 214 9 26 50 76 134 161 l120 122 121 -120 120 -120 -100 -100z" />
                <path fill={color} d="M179 321 c-42 -43 -37 -112 10 -148 21 -16 91 -16 112 0 73 56 35 177 -56 177 -27 0 -44 -8 -66 -29z m91 -46 c6 -8 10 -22 8 -32 -5 -25 -61 -25 -66 0 -4 21 14 47 33 47 7 0 18 -7 25 -15z" />
            </g>
        </svg>
    )
}
export function IconLink({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M12.654 8.764a.858.858 0 01-1.213-1.213l1.214-1.214a3.717 3.717 0 015.257 0 3.714 3.714 0 01.001 5.258l-1.214 1.214-.804.804a3.72 3.72 0 01-5.263.005.858.858 0 011.214-1.214c.781.782 2.05.78 2.836-.005l.804-.803 1.214-1.214a1.998 1.998 0 00-.001-2.831 2 2 0 00-2.83 0l-1.215 1.213zm-.808 6.472a.858.858 0 011.213 1.213l-1.214 1.214a3.717 3.717 0 01-5.257 0 3.714 3.714 0 01-.001-5.258l1.214-1.214.804-.804a3.72 3.72 0 015.263-.005.858.858 0 01-1.214 1.214 2.005 2.005 0 00-2.836.005l-.804.803L7.8 13.618a1.998 1.998 0 00.001 2.831 2 2 0 002.83 0l1.215-1.213z"
            />
        </svg>
    )
}

export function IconImg({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M11 15l-1-1-2 2h8v-1.8L14 12l-3 3zM6 6.5c0-.276.229-.5.5-.5h11c.276 0 .5.229.5.5v11c0 .276-.229.5-.5.5h-11a.504.504 0 01-.5-.5v-11zM9.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
        </svg>
    )
}

export function IconFont({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M6.26 6.678l-3.237 9.534a.5.5 0 00.473.66h1.032a.75.75 0 00.717-.53l.648-2.107H9.63l.647 2.107a.75.75 0 00.717.53h1.113a.5.5 0 00.473-.66L9.337 6.677A1 1 0 008.39 6H7.207a1 1 0 00-.947.678zM7.736 8.08h.051l1.364 4.453H6.372L7.736 8.08zm11.113 2.043v-.327a1 1 0 011-1H20a1 1 0 011 1v6.078a1 1 0 01-1 1h-.151a1 1 0 01-1-1v-.312h-.088c-.392.874-1.232 1.439-2.418 1.439-1.975 0-3.221-1.613-3.221-4.182 0-2.546 1.254-4.15 3.221-4.15 1.172 0 2.026.595 2.418 1.454h.088zm-.045 2.712c0-1.47-.685-2.404-1.754-2.404-1.068 0-1.725.92-1.725 2.404 0 1.491.657 2.395 1.725 2.395 1.076 0 1.754-.911 1.754-2.395z"
            />
        </svg>
    )
}

export function IconGear({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (24 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (24 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath}
                fill={color}
                d="M12.0017 17.0009C9.23868 17.0009 6.99968 14.7609 6.99968 11.9989C6.99968 9.23586 9.23868 6.99686 12.0017 6.99686C14.7647 6.99686 17.0037 9.23586 17.0037 11.9989C17.0037 14.7609 14.7647 17.0009 12.0017 17.0009ZM20.3697 13.8839C19.5867 13.6119 19.0237 12.8749 19.0237 11.9989C19.0237 11.1229 19.5867 10.3859 20.3687 10.1139C20.6057 10.0319 20.7517 9.78086 20.6837 9.53986C20.4847 8.83586 20.2017 8.16886 19.8477 7.54686C19.7297 7.33886 19.4707 7.26186 19.2497 7.35186C18.8647 7.50986 18.4197 7.55086 17.9587 7.43286C17.2847 7.25886 16.7337 6.70986 16.5557 6.03686C16.4337 5.57386 16.4747 5.12686 16.6317 4.73986C16.7207 4.51986 16.6437 4.26086 16.4357 4.14286C15.8187 3.79386 15.1567 3.51386 14.4607 3.31686C14.2187 3.24886 13.9687 3.39386 13.8867 3.63086C13.6147 4.41386 12.8777 4.97686 12.0017 4.97686C11.1267 4.97686 10.3887 4.41386 10.1177 3.63186C10.0347 3.39486 9.78368 3.24886 9.54268 3.31686C8.83468 3.51686 8.16368 3.80186 7.53868 4.15886C7.33768 4.27386 7.25268 4.52586 7.34068 4.74086C7.48768 5.10186 7.53268 5.51386 7.43868 5.94386C7.28368 6.64986 6.72468 7.24086 6.02568 7.42786C5.56768 7.55086 5.12768 7.51186 4.74568 7.35986C4.52568 7.27186 4.26768 7.34986 4.15068 7.55586C3.79768 8.17786 3.51568 8.84586 3.31768 9.54986C3.24968 9.78886 3.39268 10.0369 3.62568 10.1219C4.39668 10.3999 4.94868 11.1319 4.94868 11.9989C4.94868 12.8659 4.39668 13.5979 3.62468 13.8759C3.39168 13.9599 3.24968 14.2079 3.31668 14.4469C3.49368 15.0739 3.73868 15.6729 4.03968 16.2369C4.15868 16.4589 4.43468 16.5349 4.66368 16.4299C5.25868 16.1569 6.00668 16.1659 6.76768 16.6679C6.88468 16.7449 6.99268 16.8529 7.06968 16.9689C7.59668 17.7679 7.58168 18.5489 7.26768 19.1559C7.15268 19.3789 7.21968 19.6569 7.43568 19.7839C8.08968 20.1679 8.79768 20.4709 9.54468 20.6809C9.78568 20.7489 10.0337 20.6049 10.1147 20.3679C10.3837 19.5819 11.1237 19.0149 12.0017 19.0149C12.8797 19.0149 13.6197 19.5819 13.8887 20.3679C13.9697 20.6039 14.2177 20.7489 14.4587 20.6809C15.1957 20.4739 15.8947 20.1749 16.5427 19.7979C16.7607 19.6709 16.8267 19.3899 16.7097 19.1669C16.3917 18.5589 16.3727 17.7739 16.9007 16.9719C16.9777 16.8559 17.0857 16.7469 17.2027 16.6699C17.9747 16.1589 18.7297 16.1569 19.3277 16.4399C19.5567 16.5479 19.8357 16.4729 19.9557 16.2499C20.2597 15.6859 20.5047 15.0859 20.6837 14.4569C20.7517 14.2159 20.6067 13.9659 20.3697 13.8839Z"
            />
        </svg>
    )
}
export function TarelloLogo({ size = 16, color = 'var(--txtClr)' }) {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={size}

            viewBox="0 725 260 60"
        >
            <path d="M-54.3-12.9" fill={color} />
            <path d="M38.5,729.6v10.6H25.9v40H13.8v-40H1.3v-10.6H38.5z" fill={color} />
            <path d="M93.2,780H81.9v-40h11.2v7.8c2.2-5.4,5.6-8.6,11.7-8.2v11.9c-8-0.6-11.7,1.3-11.7,7.8V780z" fill={color} />
            <path d="M163.2,780c-7.3,0-11.9-3.5-11.9-11.7v-43.2h11.2v41.5c0,2.4,1.5,3.2,3.5,3.2c0.6,0,1.1,0,1.7,0v9.7 C166.2,779.8,164.7,780,163.2,780z" fill={color} />
            <path d="M186.6,780c-7.3,0-11.9-3.5-11.9-11.7v-43.2h11.2v41.5c0,2.4,1.5,3.2,3.5,3.2c0.6,0,1.1,0,1.7,0v9.7 C189.6,779.8,188.1,780,186.6,780z" fill={color} />
            <path d="M196.1,759.3c0-12.1,6.9-20.5,19-20.5s18.8,8.2,18.8,20.5c0,12.3-6.9,20.5-18.8,20.5 C203.2,779.8,196.1,771.4,196.1,759.3z M207.1,759.3c0,5.8,2.4,10.6,8.2,10.6c5.8,0,8-4.8,8-10.6s-2.4-10.4-8-10.4 C209.5,748.9,207.1,753.4,207.1,759.3z" fill={color} />
            <path d="M64.4,756.9c-3-0.4-6.1-0.4-9.1-0.4c-8.4,0-15.6,2.2-15.3,10.4c0.2,9.5,1.1,13.4,16,13.6 c13.6,0.2,19.2-3.2,19.2-20.3c0-12.3-6.5-19.7-21.2-19.7c-4.3,0-8.6,0.6-12.8,2.2v9.3c3.7-1.3,8-2.4,12.3-2.4 C59.2,749.5,63.3,751.5,64.4,756.9z M56,772c-4.5,0-6.9-0.2-7.1-4.3c0-2.2,0-3,0.4-3.7c1.3-1.3,2.6-1.7,7.3-1.7 c2.4,0,6.7,0.2,8.4,0.6c0.2,1.1,0.2,1.7,0,3c0,0.9-0.4,1.9-0.9,3C63.1,771.4,59.9,772.2,56,772z" fill={color} />
            <path d="M119.7,764.1c3,0.4,6.1,0.4,9.1,0.4c8.4,0,15.3-2.2,15.3-10.4c0-7.8-7.1-13.6-16-13.6 c-11.7,0-19.2,8.4-19.2,20.3c0,12.3,6.5,19.7,21.2,19.7c4.3,0,8.6-0.6,12.8-2.2V769c-3.7,1.3-8,2.4-12.3,2.4 C124.7,771.6,120.6,769.7,119.7,764.1z M121.6,752.5c1.1-2.6,3.9-4.1,6.7-4.1c3,0,5.6,2.2,5.6,5c0,3.7-3.7,3.9-8,3.9 c-1.9,0-3.7-0.2-5.6-0.4C120.5,755.1,120.7,754.2,121.6,752.5z" fill={color} />
        </svg>
    );
}

export function IconTarelloFace({ size = 16, color = 'var(--txtClr)' }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="-283 383 26.2 26.2"
            role="presentation"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M-260.2,383.7h-19.2c-1.7,0-3,1.3-3,3v19.2c0,0.8,0.3,1.6,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9h19.2
                c0.8,0,1.6-0.3,2.1-0.9c0.5-0.6,0.9-1.3,0.9-2.1v-19.2C-257.2,385-258.5,383.7-260.2,383.7z M-271.5,399.3c0,0.2-0.1,0.4-0.3,0.6
                c-0.2,0.2-0.4,0.2-0.7,0.2h-4.2c-0.5,0-1-0.4-1-0.8v-10.1c0-0.4,0.4-0.8,1-0.8h4.2c0.5,0,1,0.4,1,0.8V399.3z M-261.8,396.1
                c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.4,0.3-0.7,0.3h-4.2c-0.5,0-1-0.4-1-1v-6.8c0-0.5,0.4-1,1-1h4.2c0.5,0,1,0.4,1,1V396.1z"
                fill={color}
            />
            <path
                d="M-264.3,389.4c0-0.2-0.2-0.4-0.4-0.4h-1.9c-0.2,0-0.5,0.1-0.5,0.5v2.9c0,0.2,0.2,0.4,0.5,0.4h1.9
                c0.1,0,0.2,0,0.3-0.1c0,0,0.1-0.1,0.1-0.2V389.4z M-265.1,391l-0.6,0c-0.1,0-0.1-0.1-0.1-0.2v-1.1c0-0.2,0.1-0.2,0.1-0.2h0.6
                c0.1,0,0.1,0.1,0.1,0.2v1.1C-265,391.1-265.1,391-265.1,391z"
                fill={color}
            />
            <path
                d="M-274.1,389.6c0-0.3-0.2-0.6-0.4-0.6h-1.9c-0.2,0-0.6,0.2-0.5,0.6v3.9c0,0.3,0.2,0.6,0.5,0.6h1.9
                c0.2,0,0.4-0.1,0.4-0.6V389.6z M-274.8,391.6h-0.7c-0.1,0-0.2-0.1-0.2-0.2v-1.6c0-0.1,0.1-0.2,0.2-0.2h0.7c0.1,0,0.2,0.1,0.2,0.2
                v1.5C-274.6,391.5-274.7,391.6-274.8,391.6z"
                fill={color}
            />
        </svg>
    )
}

export function IconComment({ size = 16, color = 'var(--txtClr)' }) {
    const refPath = useRef()

    // useEffect(() => {
    // 	const xDiff = (219 - refPath.current.getBBox().width) / 2
    // 	const yDiff = (219 - refPath.current.getBBox().height) / 2
    // 	refPath.current.setAttribute('transform', `translate(${xDiff}, ${yDiff})`)
    // })

    return (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 219 219"
            width={size}
            height={size}
        >
            <path

                ref={refPath} id="XMLID_44_"
                d="M70.7,175.5c-2,0-4-0.5-5.7-1.6c-3.6-2.1-5.6-6.1-5.6-10.2l0-22.4c0-0.1,0-0.1-0.1-0.1
        c-20.6-4.6-35.9-23.1-35.9-44.9V91c0-28,22.7-50.7,50.7-50.7h75.7c28,0,50.7,22.7,50.7,50.7v0.7c0,28-22.7,50.7-50.7,50.7h-38.3
        c0,0-0.1,0-0.1,0l-33,30.1C76.3,174.5,73.5,175.5,70.7,175.5z M74.1,55.4c-19.7,0-35.7,16-35.7,35.7v5.2c0,16.4,12.7,30,29.1,31.1
        l6.7,0.4c0.1,0,0.1,0.1,0.1,0.2v27.6c0,0.1,0.2,0.2,0.3,0.1l30.9-28.2c0,0,0.1,0,0.1,0h44.1c19.7,0,35.7-16,35.7-35.7V91
        c0-19.7-16-35.7-35.7-35.7H74.1z"
                fill={color}
            />
        </svg>
    )
}

export function IconWarning() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <g fillRule="evenodd">
                <path
                    d="M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z"
                    fill="currentColor"
                ></path>
                <path
                    d="M12 15a1 1 0 01-1-1V9a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2"
                    fill="inherit"
                ></path>
            </g>
        </svg>
    )
}

export function IconAlert() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <g fillRule="evenodd">
                <path
                    d="M13.416 4.417a2.002 2.002 0 00-2.832 0l-6.168 6.167a2.002 2.002 0 000 2.833l6.168 6.167a2.002 2.002 0 002.832 0l6.168-6.167a2.002 2.002 0 000-2.833l-6.168-6.167z"
                    fill="currentColor"
                ></path>
                <path
                    d="M12 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2"
                    fill="#ffffff"
                ></path>
            </g>
        </svg>
    )
}

export function IconDescription({ size = 16, color = "var(--txtClr)" }) {
    const refPath = useRef()
    return (
        <svg
            width={size}
            height={size}
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={refPath} fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z" fill={color} />
        </svg>
    )
}

export function IconActivity({ size = 16, color = "var(--txtClr)" }) {
    const svgStyle = {
        fill: color,
        width: `${size}px`,
        height: `${size}px`,
    };

    return (
        <svg
            style={svgStyle}
            viewBox="-288 379 34.8 36"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <style type="text/css">
                {`.st0{opacity:1 fill: ${color};}`}
            </style>
            <g>
                <path className="st0" d="M-274.7,393.3c-0.5,0-0.9,0.2-1.1,0.6c-0.5,0.8,0.1,1.9,1.1,1.9h12.1c0.4,0,0.9-0.2,1.1-0.6c0.5-0.8-0.1-1.9-1.1-1.9H-274.7z" />
                <path className="st0" d="M-281.4,389.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5C-278.9,390.2-280,389.1-281.4,389.1z" />
                <path className="st0" d="M-274.8,390.6h16.2c0.5,0,0.9-0.2,1.1-0.6c0.5-0.8-0.1-1.9-1.1-1.9h-16.2c-0.5,0-0.9,0.2-1.1,0.6C-276.4,389.5-275.8,390.6-274.8,390.6z" />
                <path className="st0" d="M-258.6,398.5h-16.2c-0.5,0-0.9,0.2-1.1,0.6c-0.5,0.8,0.1,1.9,1.1,1.9h16.2c0.5,0,0.9-0.2,1.1-0.6C-257,399.6-257.6,398.5-258.6,398.5z" />
                <path className="st0" d="M-281.4,399.6c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5C-278.9,400.7-280,399.6-281.4,399.6z" />
                <path className="st0" d="M-262.6,403.7h-12.1c-0.5,0-0.9,0.2-1.1,0.6c-0.5,0.8,0.1,1.9,1.1,1.9h12.1c0.4,0,0.9-0.2,1.1-0.6C-261,404.8-261.6,403.7-262.6,403.7z" />
            </g>
        </svg>
    );
}

export function IconSuggestionSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 49.000000 55.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,55.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M116 426 c-7 -44 -8 -45 -52 -52 -24 -3 -44 -10 -44 -14 0 -4 20 -11 44 -14 44 -7 45 -8 52 -52 3 -24 10 -44 14 -44 4 0 11 20 14 44 7 44 8 45 52 52 24 3 44 10 44 14 0 4 -20 11 -44 14 -44 7 -45 8 -52 52 -3 24 -10 44 -14 44 -4 0 -11 -20 -14 -44z" />
                <path d="M365 311 c-5 -22 -14 -31 -36 -36 -16 -4 -29 -10 -29 -15 0 -5 13 -11 29 -15 22 -5 31 -14 36 -36 4 -16 10 -29 15 -29 5 0 11 13 15 29 5 22 14 31 36 36 16 4 29 10 29 15 0 5 -13 11 -29 15 -22 5 -31 14 -36 36 -4 16 -10 29 -15 29 -5 0 -11 -13 -15 -29z" />
                <path d="M215 161 c-5 -22 -14 -31 -36 -36 -16 -4 -29 -10 -29 -15 0 -5 13 -11 29 -15 22 -5 31 -14 36 -36 4 -16 10 -29 15 -29 5 0 11 13 15 29 5 22 14 31 36 36 16 4 29 10 29 15 0 5 -13 11 -29 15 -22 5 -31 14 -36 36 -4 16 -10 29 -15 29 -5 0 -11 -13 -15 -29z" />

            </g>
        </svg>
    )
}

export function IconVMembers() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="12" height="12" viewBox="0 0 48.000000 35.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M384 289 c-10 -12 -63 -62 -117 -112 l-98 -90 -54 53 c-53 52 -85 62 -85 24 0 -21 119 -144 139 -144 26 0 275 255 268 274 -9 22 -30 20 -53 -5z" />
            </g>
        </svg>
    )
}

export function IconPlusAddList() {
    return (
        <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
    )
}

export function IconExit() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor" />
        </svg>
    )
}

export function IconBackBtnSvg() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 11.2929L14.364 4.22185C14.7545 3.83132 15.3876 3.83132 15.7782 4.22185C16.1687 4.61237 16.1687 5.24554 15.7782 5.63606L9.41421 12L15.7782 18.364C16.1687 18.7545 16.1687 19.3877 15.7782 19.7782C15.3877 20.1687 14.7545 20.1687 14.364 19.7782L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="currentColor"></path>
        </svg>
    )
}

export function IconCard() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="Layer_2" data-name="Layer 2" viewBox="0 0 20.41 15.8">
            <defs>

            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1" d="M18.17,0H2.24C1,0,0,1,0,2.24V13.56c0,1.24,1,2.24,2.24,2.24h15.92c1.24,0,2.24-1,2.24-2.24V2.24c0-1.24-1-2.24-2.24-2.24ZM8.15,13.95H3.36c-.77,0-1.4-.63-1.4-1.4s.63-1.4,1.4-1.4h4.79c.77,0,1.4,.63,1.4,1.4s-.63,1.4-1.4,1.4Zm8.89,0c-.77,0-1.4-.62-1.4-1.4s.62-1.4,1.4-1.4,1.4,.62,1.4,1.4-.62,1.4-1.4,1.4Zm1.03-4.74H2.33c-.2,0-.36-.16-.36-.36V2.37c0-.2,.16-.36,.36-.36h15.75c.2,0,.36,.16,.36,.36v6.48c0,.2-.16,.36-.36,.36Z" />
            </g>
        </svg>
    )
}

export function IconEye() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="15px" height="15px" viewBox="0 0 58.000000 44.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,44.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M185 416 c-96 -44 -155 -116 -155 -189 0 -40 45 -115 88 -146 114 -81 230 -81 344 0 43 31 88 106 88 146 0 104 -133 213 -260 213 -37 0 -72 -8 -105 -24z m205 -53 c65 -34 113 -91 113 -133 0 -69 -120 -160 -212 -160 -115 1 -239 111 -210 187 16 42 58 83 114 109 68 33 129 31 195 -3z" />
                <path d="M216 299 c-59 -69 -15 -169 74 -169 91 0 135 106 71 171 -24 23 -38 29 -74 29 -38 0 -49 -5 -71 -31z m102 -25 c24 -17 30 -62 10 -82 -37 -37 -113 12 -89 57 10 18 37 40 51 41 3 0 16 -7 28 -16z" />
            </g>
        </svg>
    )
}

export function IconCheckList() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 55.000000 51.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,51.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M26 458 c-23 -33 -24 -393 0 -426 15 -22 19 -22 224 -22 l210 0 15 24 c12 18 15 45 13 112 -3 87 -3 89 -28 89 -25 0 -25 -2 -28 -88 l-3 -87 -179 0 -180 0 0 185 0 185 163 2 c154 3 162 4 162 23 0 19 -8 20 -177 23 -173 2 -177 2 -192 -20z" />
                <path d="M365 310 c-60 -60 -114 -110 -120 -110 -5 0 -29 23 -53 50 -43 50 -77 64 -88 35 -8 -20 114 -155 141 -155 29 0 280 253 272 274 -13 33 -45 13 -152 -94z" />
            </g>
        </svg>
    )
}

export function IconXDetails(color = 'currentColor') {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill={color} />
        </svg>
    )
}

export function IconVDetails() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="12" height="12" viewBox="0 0 48.000000 35.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M384 289 c-10 -12 -63 -62 -117 -112 l-98 -90 -54 53 c-53 52 -85 62 -85 24 0 -21 119 -144 139 -144 26 0 275 255 268 274 -9 22 -30 20 -53 -5z" />
            </g>
        </svg>
    )
}
