import { NextResponse } from 'next/server'

export async function POST(request){
    /* Pega o username do client-side */
    const username = await request.json();
    
    /* Pega as variaveis secretas da API */
    const API_KEY = process.env.API_Key
    const API_URL = "https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user="+ username.username +"&api_key="+API_KEY+"&format=json"
    
    /* Faz um GET para pegar as informações */
    
    const response = await fetch(API_URL)
    const responseData = await response.json()

    return NextResponse.json(responseData, { status: 201 })
}
