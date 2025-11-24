import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

// GET all contacts
export async function GET(request: NextRequest) {
    try {
        if (!process.env.MONGODB_URI) {
            return NextResponse.json({
                success: true,
                error: 'Database not configured yet',
                data: []
            });
        }

        await dbConnect();

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const limit = searchParams.get('limit');

        let query: any = {};

        if (status && status !== 'all') {
            query.status = status;
        }

        let contacts = Contact.find(query).sort({ createdAt: -1 });

        if (limit) {
            contacts = contacts.limit(parseInt(limit));
        }

        const result = await contacts.exec();

        return NextResponse.json({
            success: true,
            data: result,
        });
    } catch (error) {
        console.error('Contacts API Error:', error);
        return NextResponse.json(
            {
                success: true,
                error: error instanceof Error ? error.message : 'Failed to fetch contacts',
                data: []
            },
            { status: 200 }
        );
    }
}

// POST create a new contact submission  
export async function POST(request: NextRequest) {
    try {
        if (!process.env.MONGODB_URI) {
            return NextResponse.json({
                success: false,
                error: 'Database not configured'
            }, { status: 500 });
        }

        await dbConnect();

        const body = await request.json();
        const contact = await Contact.create(body);

        return NextResponse.json(
            {
                success: true,
                data: contact,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to create contact',
            },
            { status: 400 }
        );
    }
}
